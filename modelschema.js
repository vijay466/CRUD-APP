const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,

    },
    tech : {
        type : String,
        required : true
    },
    adderss : {
        type : String,
        required : true,
       
    }
})
  module.exports = mongoose.model('schema',noteSchema);

