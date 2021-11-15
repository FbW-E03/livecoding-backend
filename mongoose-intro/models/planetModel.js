const { Schema, model } = require("mongoose");

const PlanetSchema = new Schema({
  id: Number,
  name: String,
  mass: Number,
  density: Number,
  gravity: Number,
  escapeVelocity: Number,
  rotationPeriod: Number,
  lengthOfDay: Number,
  distanceFromSun: Number,
  perihelion: Number,
  aphelion: Number,
  orbitalPeriod: Number,
  meanTemperature: Number,
  surfacePressure: Number,
  numberOfMoons: Number,
  orbitalVelocity: Number,
  orbitalInclination: Number,
  orbitalEccentricity: Number,
  obliquityToOrbit: Number,
  hasRingSystem: Boolean,
  hasGlobalMagneticField: Boolean,
});

const Planet = model("planets", PlanetSchema);

module.exports = Planet;
