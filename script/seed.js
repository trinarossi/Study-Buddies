"use strict";

const flashcardSeed = require("./flashcardData");
const userSeed = require("./userData");

async function seed() {
  await flashcardSeed();
  await userSeed();
  console.log("seeded successfully");
}

module.exports = seed;