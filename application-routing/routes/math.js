const express = require("express");
const router = express.Router();

// this endpoint will read 2 values from the
// request and respond with the addition of those 2 values
router.get("/addition", (request, response) => {
  console.log(request);

  response.send(200);
});

// this endpoint will read 2 values from the
// request and respond with the subtraction of those 2 values
router.get("/subtraction", (request, response) => {
  console.log(request);

  response.send(200);
});

// this endpoint will read 2 values from the
// request and respond with the subtraction of those 2 values
router.get("/multiplication", (request, response) => {
  console.log(request);

  response.send(200);
});

module.exports = router;
