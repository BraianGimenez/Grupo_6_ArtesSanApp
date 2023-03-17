const express = require("express");
const router = express.Router();

// controller
const {login, register, storeUser, loggedIn, profile, updateProfile, deleteProfile, showProfile, loggedOut} = require("../controllers/usersController");

// middlewares
const LoginUserValidation = require("../validations/LoginUserValidation");
const registerUserValidation = require("../validations/registerUserValidation.js");
const checkSession = require("../middlewares/checkUserInSession");
const checkUserNormal = require("../middlewares/checkUserNormal");


// Login
router.get("/login", checkUserNormal,login);
router.post("/login",checkUserNormal,LoginUserValidation, loggedIn);
// Register
router.get("/register" ,checkUserNormal, register)
router.post("/register",checkUserNormal, registerUserValidation,storeUser)

// show profile
router.get("/showProfile",checkSession, showProfile)

// show profile edit
router.get("/profile",checkSession ,profile)

// update profile
router.put("/update",checkSession ,updateProfile)

// delete profile
router.delete("/delete/:id", checkSession,deleteProfile)


// destroy cookie
router.post("/destroy", loggedOut);
module.exports = router;