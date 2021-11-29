const { Schema } = require("mongoose");

const reviewSchema = new Schema({
  username: String,
  text: String,
  rating: Number,
  created: Date,
});

module.exports = {
  reviewSchema,
};
