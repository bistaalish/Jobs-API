const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');

const register = async (req, res) => {
    const newUser = req.body
    const user = await User.create({...newUser})
    res.status(StatusCodes.CREATED).json({ user })    
}

const login = async (req, res) => {
    // res.send('login user')   
    const {name,email,password} = req.body
    res.status(200).json({name,email,password}) 
}

module.exports = {
    login,
    register
}