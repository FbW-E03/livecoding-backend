const jsonwebtoken = require("jsonwebtoken");
const { Promise } = require("mongoose");

// must pass in whole user document
exports.issueJwt = (user) => {
  const payload = {
    id: user._id,
  };

  return new Promise((resolve, reject) => {
    jsonwebtoken.sign(
      payload,
      process.env["SECRET"],
      {
        expiresIn: "1h",
      },
      (error, token) => {
        if (error) {
          reject();
        }
        resolve(token);
      }
    );
  });
};

exports.verifyJwt = async (token) => {
  return new Promise((resolve, reject) => {
    jsonwebtoken.verify(token, process.env["SECRET"], (err, decoded) => {
      if (err) {
        reject();
      }

      resolve(decoded);
    });
  });
};
