const router = require("express").Router();
module.exports = router;

router.use("/flashcards", require("./flashcards"));
router.use("/pet", require("./pet"));
router.use("/users", require("./users"));
router.use("/decks", require("./decks"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});