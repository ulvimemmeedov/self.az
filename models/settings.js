const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv').config();
const connection = mongoose.createConnection(process.env.ATLAS,{ useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology:true});


const SettingsSchema = new Schema({
    title:{ 
        type: String,
    },
    metadesk:{ 
        type: String,
    },
    key:{
        type:String,
    },
    logo:{
        type:String,
    }
});
const Settings =  connection.model("Settings",SettingsSchema);

module.exports = Settings;

