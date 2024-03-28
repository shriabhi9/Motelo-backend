const mongoose = require("mongoose");

const dotenv = require('dotenv');
const Hotel = require("../models/hotel.model");
const hotels = require("../data/hotels");
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
           
    } catch (err) {
        console.log(err);
    }
}
module.exports = connectDB;