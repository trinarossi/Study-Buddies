"use strict";

const flashcardSeed = require("./flashcardData");

async function seed() {
  await flashcardSeed();
  console.log("seeded successfully");
}

module.exports = seed;