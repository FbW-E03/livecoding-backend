const jsonwebtoken = require("jsonwebtoken");

// must pass in whole user document
exports.issueJwt = async (user) => {
  const payload = {
    id: user._id,
    issued_at: Date.now(), // optional
  };

  console.log(process.env["SECRET"]);

  return await jsonwebtoken.sign(payload, process.env["SECRET"], {
    expiresIn: "1h",
  });
};
