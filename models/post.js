const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv').config();
const connection = mongoose.createConnection(process.env.ATLAS,{ useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology:true});

    
const PostsSchema = new Schema({
    title:{ 
        type: String,
    },
    content:{ 
        type: String,
    },
    date:{
        type:String,
        default: Date
    }
});

const Posts =  connection.model("Posts",PostsSchema);

module.exports = Posts;

