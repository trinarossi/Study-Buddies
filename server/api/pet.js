const router = require("express").Router();
const { Pet } = require("../db");

router.get("/:id", async (req, res, next) => {
  try {
    const pet = await Pet.findByPk(req.params.id);
    res.json(pet);
  } catch (err) {
    next (err)
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const pet = await Pet.findByPk(req.params.id);
    res.json(await pet.update(req.body));
  } catch (err) {
    next (err)
  }
})

module.exports = router;