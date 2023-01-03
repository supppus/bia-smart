const Sequelize = require("sequelize");

const sequelize = new Sequelize("beatriz_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("BEATRIZ DATABASE CONNECTED.");
  })
  .catch((e) => {
    console.log("BEATRIZ DATABASE FAILED.");
  });

module.exports = sequelize;
