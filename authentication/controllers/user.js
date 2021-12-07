const bcrypt = require("bcrypt");
const User = require("../models/User");
const { issueJwt, verifyJwt } = require("../helpers/jwt");

exports.register = async (req, res) => {
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
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // guard that password exists 💂
    if (!password) {
      //return res.status(500).send("No password given");
      throw "No password given"; // hole in the code flow
    }

    // 1. Find the user
    // find (array of documents) vs. findOne (one document) ?
    const user = await User.findOne({ email });

    // if user === null, there is no user
    // guard that the user exists 💂
    if (user === null) {
      //return res.status(500).send("No user found");
      throw "No user found";
    }

    // compare req body hashed password with user hash
    // returns true or false

    // bcrypt.compare;
    // 1. bcrypt.hash(undefined) // throws an error?
    // 2. Then compare
    const match = await bcrypt.compare(password, user.hash);

    // if password does not match
    // guard if the password matches 💂
    if (!match) {
      throw "Password does not match";
    }

    // create JWT
    const token = await issueJwt(user);

    // send JWT to client
    res.send({ message: "You are logged in", token });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// will modify the name of the user
exports.modify = async (req, res) => {
  const { name } = req.body;

  // 1. Read the token req.headers property
  // 2. Pull the token from the req.headers.authorization
  // 3. Validate the token
  // 4. Refactoring

  try {
    // How can I find the user in our users collection?
    //const user = await User.findOne({ _id: req.userId }); // will also work
    await User.findByIdAndUpdate(req.userId, {
      name: name,
    });

    res.send("Update procedure was successful!");
  } catch (error) {
    res.status(500).send("That action is not allowed");
  }
};

exports.deleteUser = async (req, res) => {
  res.send(200);
};
