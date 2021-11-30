const { Schema } = require("mongoose");

const imdbSchema = new Schema({
  rating: Number,
  votes: Number,
  id: Number,
});

module.exports = {
  imdbSchema,
};
