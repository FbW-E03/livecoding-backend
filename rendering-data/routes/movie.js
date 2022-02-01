const axios = require("axios");
const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

router.get("/search", async (req, res) => {
  // http://localhost:3001/movies/search?limit=20&skip=60
  const limit = Number(req.query["limit"]) || 20;
  const skip = Number(req.query["skip"]) || 0;

  // get total length of collection
  const lengthOfCollection = await Movie.estimatedDocumentCount();

  const movies = await Movie.find()
    .limit(limit) // expects a number
    .skip(skip) // expects a number
    .select(["title", "plot", "year"]);

  //res.status(300).send("An error occurred");

  res.send({
    movies: movies,
    length: lengthOfCollection,
  });
});

router.get("/search2", async (req, res) => {
  //const result = await fetch("http://localhost:3001/movies/search?limit=20"); // X

  try {
    const results = await axios("http://localhost:3001/movies/search?limit=20");

    res.send(results.data);
  } catch (error) {
    res.status(500).send("something went wrong");
  }
});

module.exports = router;
