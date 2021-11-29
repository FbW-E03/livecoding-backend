const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

router.get("/all", async (req, res) => {
  const comments = await Comment.find().limit(20).populate("movie_id"); // populate 2 fields?

  res.send(comments);
});

module.exports = router;
