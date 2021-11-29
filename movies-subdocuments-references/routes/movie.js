const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

router.get("/searchNominations", async (req, res) => {
  // search for movies where the subdocument "nominations" has a value of 1
  const movies = await Movie.find({ "awards.nominations": 1 }).limit(100);

  res.send(movies);
});

router.post("/create", async (req, res) => {
  const { title, plot, languages, tomatoes, reviews } = req.body;

  try {
    await Movie.create({
      title,
      plot,
      languages,
      tomatoes,
      reviews,
    });

    res.send("data saved");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
