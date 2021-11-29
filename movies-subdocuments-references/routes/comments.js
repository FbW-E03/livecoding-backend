const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

router.get("/all", async (req, res) => {
  const comments = await Comment.find().limit(20).populate("movie_id"); // populate 2 fields?

  res.send(comments);
});

router.post("/create", async (req, res) => {
  const { name, email, text, date, movie_id } = req.body;

  try {
    await Comment.create({
      name,
      email,
      text,
      date,
      movie_id,
    });

    res.send("data saved!");
  } catch (error) {
    res.status(500).send("there was an error saving the document");
  }
});

module.exports = router;
