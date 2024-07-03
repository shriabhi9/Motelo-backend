const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const loginHandler = async(req,res)=>{
    try {
        const user = await user.findOne({number: req.body.number})
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
}

module.exports = loginHandler;