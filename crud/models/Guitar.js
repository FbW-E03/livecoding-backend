const { Schema, model } = require("mongoose");

const GuitarSchema = new Schema({
  name: { type: String, required: true },
  // Array of strings
  keywords: [{ type: String, required: true }],
  colour: {
    type: String,
    enum: ["red", "green", "blue"],
    required: true,
  },
  price: {
    type: Number,
    default: 100,
  },
  manufacturer: {
    type: String,
    enum: ["Fender", "Yamaha", "G+L", "Ibanez"],
    required: true,
  },
});

const Guitar = model("guitars", GuitarSchema);

module.exports = Guitar;
