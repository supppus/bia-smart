const Sequelize = require("sequelize");
const sequelize = require("./db");

const Filter = sequelize.define("bia_filter", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  user: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

//Filter.sync({force: true});

module.exports = Filter;
