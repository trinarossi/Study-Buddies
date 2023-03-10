// API routes for users - mounted on /api/users

const router = require("express").Router();
const { User, Pet } = require("../db");
module.exports = router;

// GET route for users - serves all users including their details except for their password
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: [
        "id",
        "username",
        "firstName",
        "lastName",
        "isAdmin",
      ],
      include: { model: Pet }
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET route for single user - when sending a specific id we are serving the user based on their id
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: { model: Pet }
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// PUT route for single user - allows users to be updated based on their id
router.put("/:id/edit", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

// PUT route for single user - allows users to be updated based on their username
router.put("/:username", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.username },
    });
    if (user) {
      res.send(await user.update({ address: req.body.address }));
    } else {
      const newUser = await User.create({
        username: req.params.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });
      res.send(newUser);
    }
  } catch (err) {
    next(err);
  }
});
