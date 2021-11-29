const { Schema, model } = require("mongoose");
const { imdbSchema } = require("./schemas/imdb");
const { tomatoesSchema } = require("./schemas/tomatoes");
const { reviewSchema } = require("./schemas/reviews");

const movieSchema = new Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: Date,
  year: Number,
  countries: [String],
  imdb: imdbSchema,
  tomatoes: tomatoesSchema,
  reviews: [reviewSchema],
});

const Movie = model("quizzes", movieSchema);

module.exports = Movie;
