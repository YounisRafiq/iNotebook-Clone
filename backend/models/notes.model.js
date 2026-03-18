const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
     description : {
        type : String,
        required : true
    },
     tags : {
        type : String,
        default : "General"
    },
     date : {
        type : Date,
        default : Date.now
    },
} , {timestamps : true});

module.exports = mongoose.model("Notes" , notesSchema);