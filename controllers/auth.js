const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const {BadRequestError,UnauthenticatedError} = require('../errors');

// Register Route
const register = async (req, res) => {
    const {name,email,password} = req.body
    const user = await User.create({name,email,password})
    const token = user.createJWT()
    console.log(user)
    res.status(StatusCodes.CREATED).json({ user: {name: user.getName()}, token })    
}

// login route
const login = async (req, res) => {
    const {email,password} = req.body
    if (!email || !password) {
        throw new BadRequestError("Please provide email and password")
    }
    const user = await User.findOne({email})
    // if user does not exists
    if (!user) {
        throw new UnauthenticatedError("Invalid Credentials")
    }
    const isPasswordCorrect = await user.comparePassword(password)
    // Compare password
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError("Invalid Credentials")
    }
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({
        user: {
            name: user.getName()
        },
        token
    }) 
}

module.exports = {
    login,
    register
}