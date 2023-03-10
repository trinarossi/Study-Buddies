const Sequelize = require("sequelize");
const db = require("../db");

const Flashcard = db.define("flashcard", {
  question: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  answer: {
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
  },
  options: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  }
})

module.exports = Flashcard;