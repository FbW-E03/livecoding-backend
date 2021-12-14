const express = require("express");
const { send, read } = require("../controllers/message");
const router = express.Router();

router.post("/send", send);

// You would want to include an authorisation middleware here
router.get("/read", read);

module.exports = router;
