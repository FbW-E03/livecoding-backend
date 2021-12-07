const { verifyJwt } = require("../helpers/jwt");

exports.authoriseJwtToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];

    const [, token] = authorizationHeader.split(" ");

    const { id } = await verifyJwt(token);

    req.userId = id;

    console.log("Middleware is running!");

    // run the next middleware
    next();
  } catch (error) {
    res.status(500).send("That action is not allowed");
  }
};
