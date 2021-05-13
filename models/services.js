const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv').config();
const connection = mongoose.createConnection(process.env.ATLAS,{ useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology:true});

    
const ServicesSchema = new Schema({
    name:{ 
        type: String,
    },
    price:{ 
        type: String,
    },
    des:{
        type:String,
    }
});

const Services =  connection.model("Services",ServicesSchema);

module.exports = Services;

