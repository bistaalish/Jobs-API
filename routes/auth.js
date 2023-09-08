/* 
This is Authentication Router.
This router handles login and Authentication Routes for this program.
*/

const express = require('express');
const router = express.Router()

const {login,register} = require("../controllers/auth")

// Handles the registration 
router.post('/register',register)
// Handles the login
router.post("/login",login)

module.exports = router

