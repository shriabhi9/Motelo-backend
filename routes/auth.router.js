const express = require('express');

require("dotenv").config();
const router =  express.Router();

const singupHandler = require("../controllers/signupController")
const loginHandler = require("../controllers/loginController")

router.route("/register").post(singupHandler);
router.route("/login").post(loginHandler);

module.exports = router