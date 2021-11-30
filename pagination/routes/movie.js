const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

router.get("/search", async (req, res) => {
  // http://localhost:3001/movies/search?limit=20&skip=60
  const limit = Number(req.query["limit"]) || 20;
  const skip = Number(req.query["skip"]) || 0;

  const lengthOfCollection = await Movie.estimatedDocumentCount();

  const movies = await Movie.find()
    .limit(limit) // expects a number
    .skip(skip) // expects a number
    .select(["title", "plot", "year"]);

  res.send({
    movies: movies,
    length: lengthOfCollection,
  });
});

module.exports = router;
