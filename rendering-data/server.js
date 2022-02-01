const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movie");
const cors = require("cors");

dotenv.config();
const app = express();

// without this middleware, our client BODY object will be undefined
// we use express.json() to parse the BODY JSON object
app.use(cors());
app.use(express.json());

const { MONGO_DB_USERNAME, MONGO_DB_PASSWORD, MONGO_DB_DATABASE_NAME } =
  process.env;

mongoose
  .connect(
    `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@cluster0.fczes.mongodb.net/${MONGO_DB_DATABASE_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected successfully! 🥳");
  })
  .catch((error) => {
    console.log("Database connected failed ☹️");
    console.log(error);
  });

app.use("/movies", movieRoutes);

app.listen(3001, () => {
  console.log("The server is listening!!");
});
