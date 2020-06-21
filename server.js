const { Sequelize } = require("sequelize");
const express = require("express");
const dotenv=require("dotenv");


dotenv.config();
const port = process.env.PORT ||3000;

//Database Connection
const sequelize = require("./Database/sequelize");

//Database Models
const User = require("./models/User");
const Post = require("./models/Post");

//creating express app
const app = express();
app.use(express.json());



sequelize
  .sync()
  .then(() => {
    console.log("Database Synced Successfully");
    app.listen(port, () => {
      console.log(`connected to port ${port}...`);
    });
  })
  .catch((err) => console.log(err));

//Fetching the home page
app.post("/register", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
  })
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});


