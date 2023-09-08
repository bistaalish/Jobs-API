const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var JobSchema = new Schema({
        company: {
            type: String,
            required: [true,"Please provide company name"],
            maxlength: 50
        },
        position: {
            type: String,
            required: [true,"Please provide position"],
            maxlength: 100
        },
        status: {
            type: String,
            enum: ["interview","declined","pending"],
            default: "pending"
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'Users',
            required: [true,"Please provide user"]
        }
},
{
    timestamps: true
}
);
// Compile model from schema


module.exports = mongoose.model('Job', JobSchema );