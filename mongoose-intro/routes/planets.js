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

  console.log(body);

  res.send(200);
});

module.exports = router;
