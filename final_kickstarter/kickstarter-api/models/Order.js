const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: {type: String, require:true},
    products:[
        {
            productId:{type:String,},
            img:{type:String},
            title:{type:String},
            quantity:{type:Number},
            price:{type:Number,},
        }
    ],
    /* quantity:{type:Number,},
    total:{type:Number,}, */
},{timestamps:true});

module.exports = mongoose.model("Order", OrderSchema);