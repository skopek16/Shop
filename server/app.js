const express = require('express');
const mongoose= require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const MongoStore = require('connect-mongo')(session);
// const redis = require('redis');
// const redisStore = require('connect-redis')(session);
const bcrypt = require("./bcrypt");

const Item = require("./models/Item");
const User = require("./models/User");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(cors())
// { credentials: true, origin: 'http://localhost:8080' })
require("dotenv/config");

// redisClient.on('error', (err) => {
//     console.log('Redis error: ', err);
//   });
  
//Middleware
mongoose.set('useCreateIndex', true)
mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useUnifiedTopology: true ,
        useNewUrlParser: true,
        
    },
    () => console.log("connected to DB")
);
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    name:'session',
    secret: process.env.APP_SECRET,
    cookie: {secure: false,maxage: 3600000},
    store:new MongoStore({ mongooseConnection:mongoose.connection,ttl: 14*24*60*60}),
    resave: false,
    saveUninitialized: false
}));
// app.use((req, res, next)=>{
//     res.locals.login=req.isAuthenticated;
//     res.locals.session=req.session;
//     next();
// })
//passport
const passport = require("./passport");
app.use(passport.initialize());
app.use(passport.session());


//Routes
const items = require("./routes/api/items");
const users = require("./routes/api/users");
app.use("/api/users",users);
app.use("/api/items",items);

const Chat = require("./models/Chat")
const port = process.env.PORT || 5000;
let messages=[];
let index = 0;
app.post("/chat" ,async(req,res)=>{
    // console

    console.log("add chat")
    // console.log(req.session.passport.user);
    let chatName=req.session.passport.user+""+req.body.id;
    let reverseChatName=req.body.id+""+req.session.passport.user;
    console.log(chatName);
    const chat = new Chat({
        name: chatName,
        
    });

    try {
        const test = await Chat.findOne({"name":String(chatName)}, function (err, docs) {
            // docs is an array
        });    
        const test2 = await Chat.findOne({"name":String(reverseChatName)}, function (err, docs) {
            // docs is an array
        });
        console.log(test);
        // console.log(test.name);
        console.log(test2);
        if(test!=null || test2!=null){
            console.log("istnieej czat")
            if(test!=null){
                res.json(test);
            }else{
                res.json(test2);
            }
            
        }else{

   
        const savedChat = await chat.save();
        res.json(savedChat);
        }
        
    } catch (error) {
        res.json({message:error});
        
    }
});
app.get("/chat/:id" ,async(req,res)=>{
    // console

    console.log("get chat")
    // console.log(req.session.passport.user);
    let chatName=req.session.passport.user+""+req.params.id;
    let reverseChatName=req.params.id+""+req.session.passport.user;
    console.log(chatName);
    const chat = new Chat({
        name: chatName,
        
    });

    try {
        const test = await Chat.findOne({"name":String(chatName)}, function (err, docs) {
            // docs is an array
        });    
        const test2 = await Chat.findOne({"name":String(reverseChatName)}, function (err, docs) {
            // docs is an array
        });
        console.log(test);
        // console.log(test.name);
        console.log(test2);
        if(test!=null || test2!=null){
            console.log("istnieej czat")
            if(test!=null){
                res.json(test);
            }else{
                res.json(test2);
            }
            
        }else{

   
        const savedChat = await chat.save();
        res.json(savedChat);
        }
        
    } catch (error) {
        res.json({message:error});
        
    }
});
async function updateHistory(chatName,reverseChatName,msg){
    const test =  await Chat.findOne({"name":String(chatName)}, function (err, docs) {
        // docs is an array
    });    
    const test2 =  await Chat.findOne({"name":String(reverseChatName)}, function (err, docs) {
        // docs is an array
    });
    console.log(test);
    console.log(test2);
    if(test!=null){
        test.history.push(msg);
        await test.save();
    }else{
        test2.history.push(msg);
        await test2.save();
    }
}
io.on("connection", socket => {
    socket.on("msg",(msg,userID,userSesId) => {
        console.log(msg);
        console.log(userID);
        console.log(userSesId);
        let chatName=userSesId+""+userID;
        let reverseChatName=userID+""+userSesId;

        console.log("chat names");    
        console.log(chatName);    
        console.log(reverseChatName);
        updateHistory(chatName,reverseChatName,msg);
        console.log("po update history");

        io.emit('msg', msg);

        // let message={
        //     index: index,
        //     username:req.session.passport.user,
        //     msg:msg

        // }
        // messages.push(message);
        // io.emit("msg",message);
        // index += 1;
    })    
    socket.on("updateHighestOffer",(newOffer,itemId) => {
        console.log(newOffer);
        console.log(itemId);

        console.log("po update history");

        io.emit('updateHighestOffer', (newOffer,itemId));

        // let message={
        //     index: index,
        //     username:req.session.passport.user,
        //     msg:msg

        // }
        // messages.push(message);
        // io.emit("msg",message);
        // index += 1;
    })

})
if(process.env.NODE_ENV==="production"){
    console.log("jestemtu ! ")

    app.use(express.static(__dirname+'/public'));
    app.get(/.*/,(req,res)=>{
        res.sendFile(__dirname+'/public/index.html');
    });
}
http.listen(port,() => console.log(`Server started on port ${port}`));
