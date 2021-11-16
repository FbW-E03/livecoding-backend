const Satellites = require("../models/satellitesModel");
const express = require("express");
const router = express.Router();

// this endpoint will create a new satellite
router.post("/new", async (req, res) => {
  try {
    await Satellites.create({
      name: req.body.name,
      density: req.body.density,
      color: req.body.color,
      orbit: req.body.orbit,
    });
  } catch (error) {
    return res
      .status(500)
      .send(`Please check your data and try again, error ${error}`);
  }

  res.sendStatus(200); // change status code to 200, and send a response to the user
});

module.exports = router;
