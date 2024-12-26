const express = require("express");
const userrouter = express.Router();
const usercontroller = require('../controller/usercontroller')

userrouter.post('/login',usercontroller.login)

userrouter.post('/verify-otp',usercontroller.verifyOtp)



module.exports = userrouter;