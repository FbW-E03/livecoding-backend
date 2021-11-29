const { Schema, model, ObjectId } = require("mongoose");

const commentSchema = new Schema({
  name: String,
  email: String,
  text: String,
  date: Date,
  movie_id: { type: ObjectId, ref: "movies" }, // ref = reference
  user_id: { type: ObjectId, ref: "users" },
});

const Comment = model("comments", commentSchema);

module.exports = Comment;
