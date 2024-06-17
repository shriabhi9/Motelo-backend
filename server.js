const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.route");
const singleHotelRouter = require("./routes/singlehotel.router");
const hotelDataAddedToDBRouter = require("./routes/dataImportRouter");
const categoryDataAddedToDBRouter = require("./routes/category.import");
const authRouter = require('./routes/auth.router');
const wishlistRouter = require("./routes/wishlist.router");
const connectDB = require("./config/dbconfig");

const PORT = 3500;

app.use(cors());
app.use(express.json());
connectDB();

app.get("/",(req,res)=>{
    res.send("hello GG")
})

app.use("/api/hoteldata",hotelDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth",authRouter);
app.use("/api/wishlist",wishlistRouter)

mongoose.connection.once("open",()=>{
    console.log("Conneted to the database");
    app.listen(process.env.PORT || PORT ,()=>{
        console.log("Server is running on port 3500")
    })
})
