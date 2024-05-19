const express = require('express')
const router = express.Router()

const userSignUp = require('../controllers/authController')
const userSignin = require('../controllers/loginController')
const userProfile = require('../controllers/profController')
const verifyToken = require('../token/verifyToken')


//router
router.post("/Signup",userSignUp)
router.post("/Login",userSignin)
router.post("/user-details",verifyToken,userProfile)




module.exports = router