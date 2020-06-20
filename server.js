const { Sequelize } = require("sequelize");
const express = require("express");

//creating express app
const app = express();
app.use(express.json());

//Sequelize Code......................................

const sequelize = new Sequelize("ForgotPassword", "root", "User(123)", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define(
  "User",
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const Post = sequelize.define(
  "Post",
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);


// sequelize
//   .sync()
//   .then(() => {
//     console.log("models created");
//   })
//   .catch((err) => console.log(err));


sequelize.sync({ force: true })
  .then(() => {
    return User.create({
      username: "sudip",
      email: "sdip.ssr38@gmail.com",
    });
  })
  .then((user) => console.log(user.dataValues))
  .then(()=>{
    return Post.create({
      UserId:1,
      title: "sudip is a good boy",
      description: "This is a description",
    });
  })
  .catch(err=>console.log("error occured", err))
  .catch((err) => console.log("error occured", err))
  .catch((err) => console.log("Unable to create the user", err));

// Post.sync({ force: true })
//   .then(() => {
//     return Post.create({
//       title: "sudip is a good boy",
//       description: "This is a description",
//     });
//   })
//   .catch((err) => console.log("Unable to create the user", err));
//....................................................

//Fetching the home page
app.get("/", (req, res) => {
  res.send("home");
});

//connecting to the server port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`connected to port ${port}...`);
});
