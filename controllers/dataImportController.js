const Hotel = require("../models/hotel.model");
const hotels = require("../data/hotels");

const dataImportHandler = async(req,res)=>{
    try {
        await Hotel.deleteMany({});
        const hotelsInDB = await Hotel.insertMany(hotels.data);
        res.json({message:"data added to DB"})
        

    } catch (error) {
        console.log(error);
        res.json({message:"Could not add data to DB"})
    }
}

module.exports = dataImportHandler;