const { Flashcard, Option } = require("../server/db");

async function flashcardSeed() {
  //first flashcard
  const flashcard1 = await Flashcard.create({
    question: "What is 2 + 2 ?",
    answer: "4",
    subject: "Math",
    gradeLevel: 1
  });

  const option = await Option.create({
    answer: "4"
  });
  option.setFlashcard(flashcard1);

  const option2 = await Option.create({
    answer: "6"
  });
  option2.setFlashcard(flashcard1);

  const option3 = await Option.create({
    answer: "1"
  });
  option3.setFlashcard(flashcard1);

  const option4 = await Option.create({
    answer: "10"
  });
  option4.setFlashcard(flashcard1);

  //second flashcard
  const flashcard2 = await Flashcard.create({
    question: "What color do you get when you mix red and blue?",
    answer: "purple",
    subject: "Art",
    gradeLevel: 1
  });

  const option5 = await Option.create({
    answer: "green"
  });
  option5.setFlashcard(flashcard2);

  const option6 = await Option.create({
    answer: "orange"
  });
  option6.setFlashcard(flashcard2);

  const option7 = await Option.create({
    answer: "purple"
  });
  option7.setFlashcard(flashcard2);

  const option8 = await Option.create({
    answer: "brown"
  });
  option8.setFlashcard(flashcard2);
}

module.exports = flashcardSeed;