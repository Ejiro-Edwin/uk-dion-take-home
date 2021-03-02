const express = require("express");
const pubController = require("../controllers/pubController");
let router = express.Router();
router.use(express.json());

router.post("/subscribe/:topic", pubController.addSubContent)
router.post("/publish/:topic", pubController.publishContent)

module.exports = router;
