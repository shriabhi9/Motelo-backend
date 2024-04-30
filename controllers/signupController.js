const CryptoJS = require("crypto-js");

const User = require("../models/user.model");

const singupHandler = async (req,res)=>{
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
}

module.exports = singupHandler;