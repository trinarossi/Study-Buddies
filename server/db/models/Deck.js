const Sequelize = require("sequelize");
const db = require("../db");

const Deck = db.define("deck", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  subject: {
    type: Sequelize.STRING
  },
  gradeLevel: {
    type: Sequelize.STRING
  }
})

module.exports = Deck;