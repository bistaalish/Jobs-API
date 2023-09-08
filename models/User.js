const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: {
        required: [true, "Please provide name"],
        minlength: 3,
        maxlength: 50
    },
    email: {
        required: [true, "Please provide email"],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide valid email"
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true,"Please provide password"],
        minlength: 6,
        maxlength: 12,
    }
});
// Compile model from schema
module.exports = mongoose.model('SomeModel', SomeModelSchema );