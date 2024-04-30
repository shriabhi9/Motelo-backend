const express = require("express");


const router = express.Router();
const categoryImportHandler = require("../controllers/categoryImportController");
router.route("/").post(categoryImportHandler);

module.exports = router;