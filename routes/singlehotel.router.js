const express = require('express');
const router = express.Router();

const Hotel = require("../models/hotel.model");


router.route("/:id").get( async (req,res)=>{
    try {
        const {id} = req.params;
        const hotel = await Hotel.findById(id);
        res.json(hotel)
        
    } catch (error) {
        res.status(404).json({
            message:error,
        })
    }
})

module.exports = router;