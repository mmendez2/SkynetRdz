const express = require("express");
const visitacliSchema = require("../models/visitacli");

const router = express.Router();

// create
router.post("/visitacli", (req, res) => {
  const visitacli = visitacliSchema(req.body);
  visitacli
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all 
router.get("/visitacli", (req, res) => {
  visitacliSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get 
router.get("/visitacli/:id", (req, res) => {
  const { id } = req.params;
  visitacliSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete 
router.delete("/visitacli/:id", (req, res) => {
  const { id } = req.params;
  visitacliSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update 
router.put("/visitacli/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  visitacliSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
