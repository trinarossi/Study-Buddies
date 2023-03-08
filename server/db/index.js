const db = require("./db");

// model imports
//const User = require("./models/User");
const Flashcard = require("./models/Flashcard");
const Option = require("./models/Option");

//associations for all models
Flashcard.hasMany(Option);
Option.belongsTo(Flashcard);

module.exports = {
  db,
  models: {

  },
};
