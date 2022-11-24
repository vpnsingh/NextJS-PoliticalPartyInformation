const mongoose = require('mongoose')

const partySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please enter the name of party'],
        trim : true
    },
    short_name : {
        type : String,
        required : true
    },
    election_symbol : {
        type : String,
        required : true,
        unique : true
    },
    members : {
        type : Number,
        required : true
    },
    president : {
        type : String,
        required : true
    },
    creation_date : {
        type : String,
        required : true
    }
})

module.exports = mongoose.models.Party || mongoose.model('Party', partySchema)