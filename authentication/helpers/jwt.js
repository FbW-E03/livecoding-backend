const jsonwebtoken = require("jsonwebtoken");

// must pass in whole user document
exports.issueJwt = async (user) => {
  const payload = {
    id: user._id,
  };

  return await jsonwebtoken.sign(payload, process.env["SECRET"], {
    expiresIn: "1h",
  });
};

exports.verifyJwt = async (token) => {
  return jsonwebtoken.verify(token, process.env["SECRET"]);
};
