const mongooose = require("mongoose");

const ChatSchema = mongooose.Schema({
    name:String ,
    history:Array
});

Chat = mongooose.model("Chats",ChatSchema);
// Item.processErrors = (err) => {
//     let msg = {};
//     for (let key in err.errors) {
//         msg[key] = err.errors[key].message;
//     }
//     return msg;
// };
module.exports = Chat ;