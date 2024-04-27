const express = require('express');
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require('../models/user.model');
require("dotenv").config();
const router =  express.Router();

router.route("/register").post(async (req,res)=>{
    try {
        const newUser = new User({
            username:req.body.username,
            number:req.body.number,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString(),
        });
        const savedUser = await newUser.save();
        res.status(200).json({
            savedUser
        })
    } catch (error) {
        res.status(500).json({
            message:"error creating a user" 
        })
    }
})

router.route("/login").post(async(req,res)=>{
    try {
        const user = await User.findOne({number: req.body.number})
        !user && res.status(401).json({message:"Invalid Mobile Number"})

        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        decodedPassword !== req.body.password && res.status(401).json({
            message:"Incorrect Password"
        })

        const {password, ...rest} = user._doc;
        const accessToken = jwt.sign({username:user.username},process.env.ACCESS_TOKEN)

        res.json(...rest,accessToken);
    } catch (error) {
        res.status(404).json({
            message:"Something wrong page not " 
        })
    }
})

module.exports = router