const express = require("express");
const clientSchema = require("../models/client");

const router = express.Router();

// create user
router.post("/client", (req, res) => {
  const client = clientSchema(req.body);
  client
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/client", (req, res) => {
  clientSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/client/:id", (req, res) => {
  const { id } = req.params;
  clientSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/client/:id", (req, res) => {
  const { id } = req.params;
  clientSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/client/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;// // valores de cliente colocados en models
  clientSchema
    .updateOne({ _id: id }, { $set: { name, age, email } }) // valores de cliente colocados en models
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
