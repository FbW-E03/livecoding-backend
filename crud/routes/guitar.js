const express = require("express");
const Guitar = require("../models/Guitar");
const router = express.Router();

// "CREATE" in CRUD
router.post("/create", async (req, res) => {
  const { body } = req;

  try {
    await Guitar.create({
      name: body.name,
      colour: body.colour.toLowerCase(),
      price: body.price,
      manufacturer: body.manufacturer,
      keywords: body.keywords,
    });
  } catch (error) {
    return res.send(error);
  }

  res.sendStatus(200);
});

// "READ" in CRUD
router.get("/all", async (req, res) => {
  const guitars = await Guitar.find().lean();

  res.send(guitars);
});

// "READ" in CRUD
router.get("/advancedSearch", async (req, res) => {
  // TL;DR
  // use lean() to make accessing the database faster
  // use lean() to optimise your queries
  // use limit() to limit the results from the database
  // use sort() to sort the results on a key
  // -1 means from highest to lowest
  // 1 means from lowest to highest
  const sortQuery = {};

  if (req.query["price"]) {
    sortQuery["price"] = req.query["price"];
  }

  if (req.query["name"]) {
    sortQuery["name"] = req.query["name"];
  }

  const guitars = await Guitar.find().lean().limit(5).sort(sortQuery);

  res.send(guitars);
});

// "READ" in CRUD
router.get("/allByManufacturer", async (req, res) => {
  // TL;DR
  // use lean() to make accessing the database faster
  // use lean() to optimise your queries
  // use limit() to limit the results from the database
  const guitars = await Guitar.find()
    .lean()
    .limit(5)
    .select(["name", "manufacturer"]);

  res.send(guitars);
});

// "READ" in CRUD
// get manufacturer by request params
// request params = not optional
router.get("/manufacturer/:manufacturer", async (req, res) => {
  const guitars = await Guitar.find({
    manufacturer: req.params["manufacturer"],
  });

  res.send(guitars);
});

// "READ" in CRUD
// get manufacturer and colour by query params
// query params = optional
router.get("/search", async (req, res) => {
  const query = {};

  if (req.query["colour"]) {
    query["colour"] = req.query["colour"];
  }

  if (req.query["manufacturer"]) {
    query["manufacturer"] = req.query["manufacturer"];
  }

  if (req.query["keywords"]) {
    query["keywords"] = req.query["keywords"];
  }

  const guitars = await Guitar.find(query).lean();

  res.send(guitars);
});

// "UPDATE" in CRUD
router.put("/replace/:id", async (req, res) => {
  const { body, params } = req;

  try {
    const replacedGuitar = await Guitar.findOneAndReplace(
      { _id: params["id"] },
      {
        name: body.name,
        colour: body.colour.toLowerCase(),
        price: body.price,
        manufacturer: body.manufacturer,
        keywords: body.keywords,
      }
    );

    if (replacedGuitar === null) {
      return res.send("Document not found");
    }

    res.send("Document replaced!");
  } catch (error) {
    res.status(500).send(error);
  }
});

// "UPDATE" in CRUD
router.patch("/update/:id", async (req, res) => {
  const { body, params } = req;

  try {
    const updatedGuitar = await Guitar.findByIdAndUpdate(params["id"], {
      name: body.name,
      colour: body.colour,
      price: body.price,
      manufacturer: body.manufacturer,
      keywords: body.keywords,
    });

    if (updatedGuitar === null) {
      return res.send("Document not found");
    }

    res.send("Document updated!");
  } catch (error) {
    res.status(500).send(error);
  }
});

// "DELETE" in CRUD
router.delete("/delete/:id", async (req, res) => {
  const { params } = req;

  const deletedGuitar = await Guitar.findByIdAndDelete(params["id"]);

  if (deletedGuitar === null) {
    return res.send("Document not found");
  }

  res.send("Document deleted!");
});

module.exports = router;
