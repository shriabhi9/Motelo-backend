const Hotel = require("../models/hotel.model");

const singleHotelHandler =  async (req,res)=>{
    try {
        const {_id} = req.params;
        const hotel = await Hotel.findById(_id);
        res.json(hotel)
        
    } catch (error) {
        res.status(404).json({
            message:error,
        })
    }
}

module.exports = singleHotelHandler;