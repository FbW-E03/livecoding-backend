const express = require("express");
const { register, login, modify } = require("../controllers/user");
const { authoriseJwtToken } = require("../middleware/auth");
const router = express.Router();

// Register new user
// here we create the new user
router.post("/register", register);

// Login user
// here we get the token
router.post("/login", login);

// Modify user
// patch - useful when we want to update data in our database
router.patch("/modify", authoriseJwtToken, modify);

module.exports = router;
