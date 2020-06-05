const mongooose = require("mongoose");

const ItemSchema = mongooose.Schema({
    name:String ,
    price:Number,
    createdAt:Date,
    userID:String,
    boughtBy:String,
    typeOfAuction:String,
    auctioners:[String],
    minOffer:Number
});

Item = mongooose.model("Items",ItemSchema);
// Item.processErrors = (err) => {
//     let msg = {};
//     for (let key in err.errors) {
//         msg[key] = err.errors[key].message;
//     }
//     return msg;
// };
module.exports = Item ;