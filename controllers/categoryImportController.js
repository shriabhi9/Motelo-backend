const Category = require("../models/category.model");

const categories = require("../data/categories");

const categoryImportHandler = async(req,res)=>{
    try {
        await Category.deleteMany({});
        const categoriesInDB = await Category.insertMany(categories.data);
        res.json({
            data:categories.data,
            message:"categories added to DB"})
        

    } catch (error) {
        console.log(error);
        res.json({message:"Could not add data to DB"})
    }
}

module.exports = categoryImportHandler;