const { Schema, model } = require("mongoose");

const SatelliteSchema = new Schema({
  name: { type: String, required: true, minLength: 2, maxLength: 10 },
  density: { type: Number, min: 0.1, max: 100 },
  color: {
    type: String,
    enum: ["red", "green", "yellow", "purple"],
    required: true,
  },
  orbit: {
    type: Number,
    required: true,
    validate: {
      // here we use custom validation
      validator: (value) => {
        const remainder = value % 5; // check for remainder when divided by 5
        if (remainder === 0) {
          return true;
        }

        return false; // fail if number is not dividable by 5
      },
      message: "Custom validation failed", // custom error message
    },
  },
});

// if we try to save to a collection that does not exist
// mongodb will automatically create it

// model exists as our interface to the collection
const Satellites = model("satellites", SatelliteSchema);

module.exports = Satellites;
