const express = require("express");


const mongoose= require("mongoose");
const User = require("../../models/User");
const Item = require("../../models/Item");
const bcrypt = require("../../bcrypt");
const passport = require("../../passport");
const router = express.Router();

const bodyParser = require("body-parser");
const rejectMethod = (_req, res, _next) => {
    // Method Not Allowed
    res.sendStatus(405);
};

//check if login 
router.route("/ifLogin").get(async (req, res) => {
    try{
        req.session.isLoggedIn =true;   
       let userName = await User.findById(req.session.passport.user, 'userName', function (err, User) {});   
       req.session.username = userName.userName;
       res.json(req.session);
    }catch(err){  

        console.log("blad")
        res.json({message:err});
    }

});
// router.route("/userSes").get(async (req, res) => {
//     try{
//         res.json(req.session.user);
//     }catch(err){  

//         console.log("blad")
//         res.json({message:err});
//     }

// });
//logout
router.route("/logout").get(async (req, res) => {
    try{
        req.session.destroy();
        res.json({"answer":"wylogowany"});
    }catch(err){  

        console.log("blad")
        res.json({message:err});
    }

});

//login
router.route("/login").post(passport.authenticate("local"), 
async (req, res) => {

    try{
            // console.log(`zalogwany ${req.body.userName}`);
            let userName = await User.findById(req.session.passport.user, 'userName', function (err, User) {});   
            req.session.username = userName.userName;
        req.session.isLoggedIn =true;   
        res.json(req.session);
        }catch(err){
            console.log("blad")
            res.json({message:err});
        }
    })
    .get((req, res) => {
        res.json({"test":"udało się "});
    })
    .all(rejectMethod);


//register
// router.get("/login",(req,res)=> res.send("register"));



router.route("/register").post(
    // „dla treningu”, inaczej niż w przykładzie z wykładu
    // (tsw-mongo-crud) użyjemy tutaj async/await
    async (req, res) => {
        
        console.log(req.body.userName)
        console.log(req.body.password)
        try {
            let passwordHash = bcrypt.hash(req.body.password);
            let user = new User({
                userName:req.body.userName,
                password:passwordHash
            });
            console.log("przed zapisaniem");
            let doc = await user.save();
            console.log("po zapisaniem");
            res.json(doc);
        } catch (err) {
            if (!req.body.password) {
                // Unprocessable Entity
                res.status(422).json({
                    password: "Error – password must not be empty!"
                });
            } else {

                res.json({message:err});
                // res.status(422).json(User.processErrors(err));
            }
        }
    })
    .all(rejectMethod);

    router.route("/").get(async(req,res)=>{
        //TO DO change to send back only user Id and username
        try {
            console.log(req.session.passport.user);
            const users = await User.find({ _id: {$ne: req.session.passport.user}});
            console.log(users);
            res.json(users);
        } catch (error) {
            res.json({message:error});
        }
    })
    .all(rejectMethod);













module.exports = router;