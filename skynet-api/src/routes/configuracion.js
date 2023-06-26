const express = require("express");
const configuracionSchema = require("../models/configuracion");

const router = express.Router();

// create
router.post("/configuracion", (req, res) => {
  const configuracion = configuracionSchema(req.body);
  configuracion
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all
router.get("/configuracion", (req, res) => {
  configuracionchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get
router.get("/configuracion/:id", (req, res) => {
  const { id } = req.params;
  configuracionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete
router.delete("/configuracion/:id", (req, res) => {
  const { id } = req.params;
  configuracionSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update
router.put("/configuracion/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  configuracionSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
