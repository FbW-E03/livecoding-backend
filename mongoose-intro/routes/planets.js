const express = require("express");
const PlanetsModel = require("../models/planetModel");
const router = express.Router();

// GET request
router.get("/all", async (req, res) => {
  // find() returns an array of results
  const planets = await PlanetsModel.find();

  res.send(planets);
});

// POST request
router.post("/new", async (req, res) => {
  const { body } = req;

  // create new planet!
  console.log(body);

  try {
    await PlanetsModel.create({
      ...body,
    });
  } catch (error) {
    return res.status(500).send("Data is not valid");
  }

  res.send(200);
});

module.exports = router;
