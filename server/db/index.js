const db = require("./db");

// model imports
//const User = require("./models/User");
const Flashcard = require("./models/Flashcard");
const User = require("./models/User");
const Pet = require("./models/Pet")
const Deck = require("./models/Deck");

//associations for all models

Flashcard.belongsTo(Deck);
Deck.hasMany(Flashcard);

Pet.belongsTo(User);
User.hasOne(Pet);

module.exports = {
  db,
  Flashcard,
  Deck,
  User,
  Pet
};
