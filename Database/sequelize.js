const { Sequelize } = require("sequelize");

module.exports = sequelize = new Sequelize(
  "ForgotPassword",
  "root",
  "User(123)",
  {
    host: "localhost",
    dialect: "mysql",
  }
);
