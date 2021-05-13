const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

class conn {
    constructor(){
        try {
             mongoose.connect(process.env.ATLAS,{ useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
                useUnifiedTopology:true}).then(console.log('db connect success'));
          } catch (error) {
            handleError(error);
          }
    }

}
module.exports = conn;