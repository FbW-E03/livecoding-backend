const { Schema, model } = require("mongoose");

const GuitarSchema = new Schema({
  name: { type: String, required: true },
  keywords: String,
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
    enum: ["Fender", "Yamaha", "G+L"],
    required: true,
  },
});

const Guitar = model("guitars", GuitarSchema);

module.exports = Guitar;
