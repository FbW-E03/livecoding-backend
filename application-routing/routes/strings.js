const express = require("express");

const router = express.Router();

// this endpoint will read a string and convert it to uppercase
router.get("/uppercase", (request, response) => {
  console.log(request);

  response.send(200);
});

module.exports = router;
