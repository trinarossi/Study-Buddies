// API routes for the authorization piece
const router = require("express").Router();
const { User } = require("../db");

module.exports = router;

// login route - authenticates the user based on the class method from the user model
// allows users to log in or throws an error
router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
    console.log("successful login");
  } catch (err) {
    next(err);
  }
});

// signup route - creates the User instance in the database, generates a token
// confirms if the username already exists in the database and throws an error
router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
    console.log("successful sign-up");
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

// logout route
// removes token from localstorage
// clears the session and redirects the client to the homepage
router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

// authenticate me route
// finds user based on the findByToken User class method
router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});