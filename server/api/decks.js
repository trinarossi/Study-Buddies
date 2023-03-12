const router = require("express").Router();
const { Flashcard, Deck } = require("../db");

//get route for all decks
router.get("/", async (req, res, next) => {
  try {
    const decks = await Deck.findAll({
      include: { model: Flashcard }
    });
    res.json(decks);
  } catch (err) {
    nect (err);
  }
});

//get route for singleDeck
router.get("/:id", async (req, res, next) => {
  try {
    const deck = await Deck.findByPk(req.params.id, {
      include: { model: Flashcard }
    });
    res.json(deck);
  } catch (err) {
    next (err)
  }
});

module.exports = router;