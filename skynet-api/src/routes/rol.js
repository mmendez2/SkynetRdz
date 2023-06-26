const express = require("express");
const rolSchema = require("../models/rol");

const router = express.Router();

// create
router.post("/rol", (req, res) => {
  const rol = rolSchema(req.body);
  rol
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all
router.get("/rol", (req, res) => {
  rolchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get
router.get("/rol/:id", (req, res) => {
  const { id } = req.params;
  rolSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete
router.delete("/rol/:id", (req, res) => {
  const { id } = req.params;
  rolSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update
router.put("/rol/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  rolSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
