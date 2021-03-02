const express = require("express");
const subController = require("../controllers/subController");
let router = express.Router();
router.use(express.json());

router.post("/test1", subController.messageReceived)
router.post("/test2", subController.messageReceived)

module.exports = router;
