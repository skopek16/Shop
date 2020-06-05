const express = require("express");
const mongoose= require("mongoose");

const User = require("../../models/User");

const passport = require("../../passport");
const bodyParser = require("body-parser");
const Item = require("../../models/Item");
const router = express.Router();

//Get
router.get("/",async(req,res)=>{
    try {
        // console.log(typeof(req.session.passport));
        if(typeof(req.session.passport)!="undefined"){
            
            const items = await Item.find({ 'boughtBy': "","userID":{ $ne: String(req.session.passport.user) } ,    "auctioners": {$ne: String(req.session.passport.user)}
        }, function (err, docs) {
                // docs is an array
            });
            res.json(items);
        }else{        
            const items = await Item.find({ 'boughtBy': "" }, function (err, docs) {
                // docs is an array
            });
            res.json(items);
        } 
        // const items = await Item.find({ 'boughtBy': "" }, function (err, docs) {
        //     // docs is an array
        // });
    } catch (error) {
        res.json({message:error});
    }
});
//Get user's items
router.get("/yourItems",async(req,res)=>{

    try {

        const items = await Item.find({ 'userID': String(req.session.passport.user) }, function (err, docs) {
            // docs is an array
        });
        res.json(items);
    } catch (error) {

        res.json({message:error});
    }
});
router.get("/yourBoughtItems",async(req,res)=>{

    try {

        const items = await Item.find({ 'boughtBy': String(req.session.passport.user) }, function (err, docs) {
            // docs is an array
        });
        console.log(items);
        res.json(items);
    } catch (error) {

        res.json({message:error});
    }
});
router.get("/yourAuctions",async(req,res)=>{

    try {

        const items = await Item.find({"auctioners":String(req.session.passport.user),"boughtBy":"" }, function (err, docs) {
            // docs is an array
        });
        console.log(items);
        res.json(items);
    } catch (error) {

        res.json({message:error});
    }
});

router.post("/buyItem",async(req,res)=>{

    try {

        const item = await Item.findOne({ _id: req.body.id }, function (err, docs) {
            // docs is an array
        });
        console.log("buyitem");
        console.log(req.body.id);
        console.log(item);
        if(item.boughtBy!= ""){

        res.json({"msg":"Produkt juz zakupiony"});
        }else{
        item.boughtBy = req.session.passport.user;
        item.save();
        console.log(item);
        res.json({"msg":"zakupiono"});
        }
    } catch (error) {

        res.json({message:error});
    }
});
router.post("/makeOffer",async(req,res)=>{

    try {

        const item = await Item.findOne({ _id: req.body.id }, function (err, docs) {
            // docs is an array
        });
        console.log("buyitem");
        console.log(req.body.id);
        console.log(item);
        if(item.boughtBy!= ""){

        res.json({"msg":"Produkt juz zakupiony"});
        }else{
        item.auctioners.push( req.session.passport.user);
        item.minOffer= req.body.offer;
        item.save();
        console.log(item);
        res.json({"msg":"Stawiono Oferte"});
        }
    } catch (error) {

        res.json({message:error});
    }
});



async function endAuction(itemId){
   
    try{    
        console.log("test24"); 
        console.log(itemId); 
    const item = await Item.findOne({ _id: itemId }, function (err, docs) {
        // docs is an array
    });
    console.log("buyitem");
    console.log(item);
    if(item.boughtBy!= ""){

    }else{
    console.log("koniec aukcji");
    console.log(item.auctioners[item.auctioners.length-1]);
    item.boughtBy = item.auctioners[item.auctioners.length-1];
    item.save();
    console.log(item);
    // res.json({"msg":"zakupiono"});
    }
}catch{
    console.log("error");
    }


}
router.route("/").post( async(req,res)=>{
    // console
  
    console.log("add item")
   console.log(req.session.passport.user);
    timeOfEnding = new Date();


    const item = new Item({
        name: req.body.name,
        price: req.body.price,
        userID: req.session.passport.user,
        createdAt: new Date(),
        boughtBy: "",
        typeOfAuction:req.body.typeOfAuction,
        minOffer:req.body.minOffer

    });
    console.log("item._id"); 
    console.log(item._id);
    itemId=item._id; 
    setTimeout( function(){   
        endAuction(itemId);

    },req.body.endTime)
    if(req.body.typeOfAuction=="auction"){
        console.log("wybrano aukcje");
        setTimeout(function(){ console.log("Your text!");}, 10000);
    }
   
    try {
        const savedItem = await item.save();
        res.json(savedItem);
        
    } catch (error) {
        res.json({message:error});
        
    }
});
router.delete("/:id",async(req,res)=>{
    try {
        const removedItem = await Item.deleteOne({_id:req.params.id});
        res.json(removedItem);
        
    } catch (error) {
        res.json({message:error});
        
    }
});

// async function loadItemsCollection(){
//     const client = await mongoose.connect(
//         process.env.DB_CONNECTION,
//         { 
//             useNewUrlParser: true,
            
//         },
//         () => console.log("connected to DB")
//     );
//     return client.db("40thievs").collection("items");
// }

module.exports =router;