const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {type: String, require:true, unique:true},
    desc:{type: String, require:true },
    img:{type: String, require: true},
    categories:{type: Array},
    reward_one:{type: Number, require: true},
    reward_one_desc:{type: String, require:true},
    reward_two:{type: Number, require: true},
    reward_two_desc:{type: String, require:true},
    reward_three:{type: Number, require: true},
    reward_three_desc:{type: String, require:true},
    story:{type: String, require:true},
    risks:{type: String, require:true},
    contact_info:{type: String, require:true},
},{timestamps:true});

module.exports = mongoose.model("Product", ProductSchema);