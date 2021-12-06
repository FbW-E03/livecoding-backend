const bcrypt = require("bcrypt");
const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Register new user
router.post("/register", async (req, res) => {
  const { body } = req;

  try {
    const hash = await bcrypt.hash(body.password, 10);

    await User.create({
      name: body.name,
      email: body.email,
      hash,
    });
  } catch (error) {
    return res.send(error);
  }

  res.sendStatus(200);
});

module.exports = router;
