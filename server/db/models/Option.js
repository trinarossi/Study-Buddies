const Sequelize = require("sequelize");
const db = require("../db");

const Option = db.define("option", {
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
    allowEmpty: false
  }
})

module.exports = Option;