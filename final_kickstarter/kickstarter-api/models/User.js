const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{type:String},
    contact:{type:Number},
    address:{type:String},
    username: {type: String, require:true, unique:true},
    email:{type: String, require:true, unique:true },
    password:{type: String, require: true},
    isAdmin: {
        type: Boolean,
        default: false,
    },
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);