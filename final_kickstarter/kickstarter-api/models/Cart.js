const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    _id: {type: String, require:true,unique:true},
    products:[
        {
            productId:{type:String,},
            img:{type:String},
            title:{type:String},
            quantity:{type:Number},
            price:{type:Number,},
        }
    ],
    quantity:{type:Number,},
    total:{type:Number,},
},{timestamps:true});

module.exports = mongoose.model("Cart", CartSchema);