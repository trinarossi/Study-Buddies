const router = require("express").Router();
const { Flashcard, Deck } = require("../db");

//get route for all flashcards
router.get("/", async (req, res, next) => {
  try {
    const flashcards = await Flashcard.findAll({
      include: { model: Deck }
    });
    res.json(flashcards);
  } catch (err) {
    next (err);
  }
})

//get route for singleFlashcard
router.get("/:id", async (req, res, next) => {
  try {
    const flashcard = await Flashcard.findByPk(req.params.id, {
      include: { model: Deck }
    });
    res.json(flashcard);
  } catch(err) {
    next (err);
  }
});

module.exports = router;