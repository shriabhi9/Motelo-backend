const express = require("express");
const mongoose = require("mongoose");

const app = express();

const hotelRouter = require("./routes/hoter.router");
const categoryRouter = require("./routes/category.route");
const singleHotelRouter = require("./routes/singlehotel.router");
const hotelDataAddedToDBRouter = require("./routes/dataImportRouter");
const categoryDataAddedToDBRouter = require("./routes/category.import");
const connectDB = require("./config/dbconfig");

const PORT = 3500;

app.use(express.json());
connectDB();

app.get("/",(req,res)=>{
    res.send("hello GG");
})

app.use("/api/hoteldata",hotelDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);

mongoose.connection.once("open",()=>{
    console.log("Conneted to the database");
    app.listen(process.env.PORT || PORT ,()=>{
        console.log("Server is running")
    })
})
