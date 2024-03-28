const express = require("express");
const mongoose = require("mongoose");

const app = express();

const hotelRouter = require("./routes/hoter.router");
const hotelDataAddedToDBRouter = require("./routes/dataImportRouter");
const connectDB = require("./config/dbconfig");

const PORT = 3500;

app.use(express.json());
connectDB();

app.get("/",(req,res)=>{
    res.send("hello GG");
})

app.use("/api/hoteldata",hotelDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);

mongoose.connection.once("open",()=>{
    console.log("Conneted to the database");
    app.listen(process.env.PORT || PORT ,()=>{
        console.log("Server is running")
    })
})
