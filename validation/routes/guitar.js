const express = require("express");
const Guitar = require("../models/Guitar");
const router = express.Router();

router.post("/create", async (req, res) => {
  const { body } = req;

  try {
    await Guitar.create({
      name: body.name,
      colour: body.colour.toLowerCase(),
      price: body.price,
      manufacturer: body.manufacturer,
      keywords: body.keywords,
    });
  } catch (error) {
    return res.send(error);
  }

  res.sendStatus(200);
});

module.exports = router;
