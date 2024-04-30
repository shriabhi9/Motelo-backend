const express = require("express");
const router = express.Router();

const dataImportHandler = require("../controllers/dataImportController");

router.route("/").post(dataImportHandler);

module.exports = router;