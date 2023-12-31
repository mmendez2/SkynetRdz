const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const clientRoute = require("./routes/client");
const visitacliRoute = require("./routes/visitacli");


// settings
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors');
app.use(cors());

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", clientRoute);
app.use("/api", visitacliRoute);



// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));