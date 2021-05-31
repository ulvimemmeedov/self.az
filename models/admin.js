const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv').config();
const connection = mongoose.createConnection(process.env.ATLAS,{ useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology:true});

const passportLocalMongoose = require('passport-local-mongoose');

const AdminSchema = new Schema({
    username:{ 
        type: String,
        unique: true
    },
    role:{type:String,default:"admin"},
    password: String
});
AdminSchema.plugin(passportLocalMongoose);

const Admin =  connection.model("Admin",AdminSchema);

module.exports = Admin;

