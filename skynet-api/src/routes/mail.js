const express = require("express");
const mailSchema = require("../models/mail");

const router = express.Router();

// create
router.post("/mail", (req, res) => {
  const mail = mailSchema(req.body);
  mail
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all
router.get("/mail", (req, res) => {
  mailchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get
router.get("/mail/:id", (req, res) => {
  const { id } = req.params;
  mailSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete
router.delete("/mail/:id", (req, res) => {
  const { id } = req.params;
  mailSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update
router.put("/mail/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  mailSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
