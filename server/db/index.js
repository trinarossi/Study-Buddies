const db = require("./db");

// model imports
//const User = require("./models/User");
const Flashcard = require("./models/Flashcard");
const Option = require("./models/Option");
const User = require("./models/User");
const Pet = require("./models/Pet")

//associations for all models
Flashcard.hasMany(Option);
Option.belongsTo(Flashcard);
Pet.belongsTo(User);
User.hasOne(Pet);

module.exports = {
  db,
  Flashcard,
  Option,
  User,
  Pet
};
