const express = require("express");
const Quiz = require("../models/Quiz");
const router = express.Router();

router.post("/create", async (req, res) => {
  const { body } = req;

  try {
    await Quiz.create({
      name: body.name,
      questions: body.questions,
    });
  } catch (error) {
    return res.send(error);
  }

  res.sendStatus(200);
});

module.exports = router;
