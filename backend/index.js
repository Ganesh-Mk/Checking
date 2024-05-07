const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/userModel");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/loginDB").then(() => {
  console.log("Mongodb connected");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/alluser", (req, res) => {
  UserModel.find()
    .then((allUser) => res.send(allUser))
    .catch((err) => console.log(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((userModel) => res.send(userModel))
    .catch((err) => console.log(err));
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
