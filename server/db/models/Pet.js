const Sequelize = require("sequelize");
const db = require("../db");

const Pet = db.define("pet", {
  name: {
    type: Sequelize.STRING,
    validate: {
      max: 16,
      notEmpty: true
    },
    allowNull: false
  },
  petType: {
    type: Sequelize.ENUM(["CAT", "DOG", "DRAGON"]),
    allowNull: false
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
})

module.exports = Pet;