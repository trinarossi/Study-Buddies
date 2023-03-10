const { Flashcard, Deck } = require("../server/db");

async function flashcardSeed() {

  //Grade 1 Math Deck- Addition & Subtraction
  const gr1MathASDeck = await Deck.create({
    name: "Grade 1 Math- Addition & Subtraction",
    subject: "MATH",
    gradeLevel: "1"
  });

  const gr1MathAS1 = await Flashcard.create({
    question: "What is 2 + 2 ?",
    answer: "4",
    subject: "MATH",
    gradeLevel: "1",
    options: ["4", "6", "10", "1"]
  });


  const gr1MathAS2 = await Flashcard.create({
    question: "What is 5 - 2 ?",
    answer: "3",
    subject: "MATH",
    gradeLevel: "1",
    options: ["4", "0", "3", "7"]
  });

  const gr1MathAS3 = await Flashcard.create({
    question: "What is 9 + 1 ?",
    answer: "10",
    subject: "MATH",
    gradeLevel: "1",
    options: ["9", "8", "91", "10"]
  });


  const gr1MathAS4 = await Flashcard.create({
    question: "What is 8 - 3 ?",
    answer: "5",
    subject: "MATH",
    gradeLevel: "1",
    options: ["5", "4", "11", "7"]
  });

  const gr1MathAS5 = await Flashcard.create({
    question: "What is 6 - 0 ?",
    answer: "6",
    subject: "MATH",
    gradeLevel: "1",
    options: ["5", "0", "8", "6"]
  });


  const gr1MathAS6 = await Flashcard.create({
    question: "What is 3 + 3 ?",
    answer: "6",
    subject: "MATH",
    gradeLevel: "1",
    options: ["33", "6", "0", "9"]
  });

  const gr1MathAS7 = await Flashcard.create({
    question: "What is 9 - 2 ?",
    answer: "7",
    subject: "MATH",
    gradeLevel: "1",
    options: ["2", "5", "11", "7"]
  });


  const gr1MathAS8 = await Flashcard.create({
    question: "What is 7 + 0 ?",
    answer: "7",
    subject: "MATH",
    gradeLevel: "1",
    options: ["8", "7", "3", "2"]
  });

  const gr1MathAS9 = await Flashcard.create({
    question: "What is 1 + 5 ?",
    answer: "6",
    subject: "MATH",
    gradeLevel: "1",
    options: ["9", "6", "15", "3"]
  });


  const gr1MathAS10 = await Flashcard.create({
    question: "What is 10 + 2 ?",
    answer: "12",
    subject: "MATH",
    gradeLevel: "1",
    options: ["5", "8", "11", "12"]
  });

  gr1MathAS1.setDeck(gr1MathASDeck);
  gr1MathAS2.setDeck(gr1MathASDeck);
  gr1MathAS3.setDeck(gr1MathASDeck);
  gr1MathAS4.setDeck(gr1MathASDeck);
  gr1MathAS5.setDeck(gr1MathASDeck);
  gr1MathAS6.setDeck(gr1MathASDeck);
  gr1MathAS7.setDeck(gr1MathASDeck);
  gr1MathAS8.setDeck(gr1MathASDeck);
  gr1MathAS9.setDeck(gr1MathASDeck);
  gr1MathAS10.setDeck(gr1MathASDeck);

  //Grade 1 Science Deck
  const gr1SciBioDeck = await Deck.create({
    name: "Grade 1 Science- Biology",
    subject: "SCIENCE",
    gradeLevel: "1"
  });

  const gr1SciBio1 = await Flashcard.create({
    question: "Which is a vegetable?",
    answer: "Cabbage",
    subject: "SCIENCE",
    gradeLevel: "1",
    options: ["Cabbage", "Watermelon", "Apple", "Banana"]
  });


  const gr1SciBio2 = await Flashcard.create({
    question: "What helps a mammal to breathe?",
    answer: "Lungs",
    subject: "SCIENCE",
    gradeLevel: "1",
    options: ["Gills", "Lungs", "Leaves", "None of the Above"]
  });

  const gr1SciBio3 = await Flashcard.create({
    question: "Which of these do fish use to breath?",
    answer: "Gills",
    subject: "SCIENCE",
    gradeLevel: "1",
    options: ["Lungs", "Gills", "Both", "None of the Above"]
  });


  const gr1SciBio4 = await Flashcard.create({
    question: "Which of these is man-made?",
    answer: "Bike",
    subject: "SCIENCE",
    gradeLevel: "1",
    options: ["Stone", "Coal", "Bike", "Water"]
  });

  const gr1SciBio5 = await Flashcard.create({
    question: "Which of these is not man-made?",
    answer: "Mountain",
    subject: "SCIENCE",
    gradeLevel: "1",
    options: ["Apartment", "Road", "Swimming Pool", "Mountain"]
  });


  const gr1SciBio6 = await Flashcard.create({
    question: "Fire requires oxygen to burn.",
    answer: "True",
    subject: "SCIENCE",
    gradeLevel: "1",
    options: ["True", "False"]
  });

  const gr1SciBio7 = await Flashcard.create({
    question: "What is 9 - 2 ?",
    answer: "7",
    subject: "SCIENCE",
    gradeLevel: "1",
    options: ["2", "5", "11", "7"]
  });


  const gr1SciBio8 = await Flashcard.create({
    question: "Finish the sentence: Mammals cannot breathe...",
    answer: "Underwater",
    subject: "SCIENCE",
    gradeLevel: "1",
    options: ["In caves", "On mountains", "Underwater", "In forrests"]
  });

  const gr1SciBio9 = await Flashcard.create({
    question: "Which is the largest land animal?",
    answer: "Elephant",
    subject: "SCIENCE",
    gradeLevel: "1",
    options: ["Elephant", "Lion", "Horse", "Dog"]
  });


  const gr1SciBio10 = await Flashcard.create({
    question: "Finish the sentence: We get light from...",
    answer: "The sun",
    subject: "SCIENCE",
    gradeLevel: "1",
    options: ["The moon", "The ocean", "The trees", "The sun"]
  });

  gr1SciBio1.setDeck(gr1SciBioDeck);
  gr1SciBio2.setDeck(gr1SciBioDeck);
  gr1SciBio3.setDeck(gr1SciBioDeck);
  gr1SciBio4.setDeck(gr1SciBioDeck);
  gr1SciBio5.setDeck(gr1SciBioDeck);
  gr1SciBio6.setDeck(gr1SciBioDeck);
  gr1SciBio7.setDeck(gr1SciBioDeck);
  gr1SciBio8.setDeck(gr1SciBioDeck);
  gr1SciBio9.setDeck(gr1SciBioDeck);
  gr1SciBio10.setDeck(gr1SciBioDeck)
}

module.exports = flashcardSeed;