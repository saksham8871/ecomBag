
const mongoose = require('mongoose');
mongoose.connect("mongodv://1227.0.0.1:27017/scatch");

const userSchema = new mongoose.Schema({
 
 fullName : String,
 email: String,
 password: String,
 cart: [],
 isadmin: Boolean,
 order: [],
 contactNo: Number,
 picture: String,


});