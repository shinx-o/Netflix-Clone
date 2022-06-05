const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname : {type: String, required: true},
    lastname : {type: String, default: ''},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    profilePic : {type: String, default: ''},
    admin : {type: Boolean, default: false, }
},{
    timestamps : true
});

module.exports = mongoose.model("User", UserSchema);