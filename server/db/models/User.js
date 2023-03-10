// User model with username as email, password, firstName, lastName, address and isAdmin boolean

const Sequelize = require("sequelize");
const db = require("../db");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 5;
const JWT = process.env.JWT;

// User model
const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = User;

/**
 * Instance method that compares encrypted password to user provided password
 * @param {string} candidatePwd - user provided password through login
 * @returns {boolean} - true if passwords match, false if they do not match
 */
User.prototype.correctPassword = function (candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};

/**
 * Instance method that generates a token based on a user id
 * @returns {string} - token generated for the user based on the provided JWT secret key
 */
User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, JWT);
};

/**
 * Class method that authenticates the user based on the provided username and correct password
 * @param {obj} {username, password} - username and password provided by the user upon login
 * @returns {string} userToken or error message
 */
User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

/**
 * Class method that finds a user through their sent token
 * @param {string} token - browser sents token to be verified
 * @returns {obj/string} userobject if user has been found and the token matches, otherwise error message
 */
User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, JWT);
    const user = User.findByPk(id);
    if (!user) {
      throw "nooo";
    }
    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

/**
 * Hook function that hashes the userpassword
 * @param {object} user instance
 * creates a hashed password using bcrypt
 */
const hashPassword = async (user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

// Hooks are implemented anytime the User is updated or created
User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
