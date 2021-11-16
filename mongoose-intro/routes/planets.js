const express = require("express");
const Planets = require("../models/planetModel");
const router = express.Router();

// GET request
router.get("/all", async (req, res) => {
  // find() returns an array of results
  const planets = await Planets.find();

  res.send(planets);
});

// POST request
router.post("/new", async (req, res) => {
  const { body } = req;

  try {
    // create new planet!
    await Planets.create({
      ...body,
    });
  } catch (error) {
    return res.status(500).send("Data is not valid");
  }

  res.send(200);
});

module.exports = router;
