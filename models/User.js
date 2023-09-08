const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
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
    }
});

// hash password using bcrypt
UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  })

// Create JSON web token
UserSchema.methods.createJWT = function () {
    return jwt.sign(
        {userId: this._id, name: this.name},
        process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_LIFETIME
        }
    )
}
// get Name
UserSchema.method.getName = function () {
    return this.getName
}

// Compile model from schema
module.exports = mongoose.model('Users', UserSchema );