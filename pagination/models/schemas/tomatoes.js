const { Schema } = require("mongoose");

const tomatoesReviewedBySchema = new Schema({
  rating: Number,
  numReviews: Number,
  meter: Number,
});

const tomatoesSchema = new Schema({
  viewer: tomatoesReviewedBySchema,
  critic: tomatoesReviewedBySchema,
  fresh: Number,
  rotten: Number,
  lastUpdated: Date,
});

module.exports = {
  tomatoesSchema,
};
