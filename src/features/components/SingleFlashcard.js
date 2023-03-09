import React, { useState } from "react";

const SingleFlashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? "flip" : ""}`}>
      <section className="front">
        <h1>{flashcard.question}</h1>
        <div>
          <ol type="A">
            {flashcard.options.map((option) => {
              return <li onClick={() => setFlip(!flip)}>{option.answer}</li>;
            })}
          </ol>
        </div>
      </section>
      <section className="back" onClick={() => setFlip(!flip)}>
        <h1>{flashcard.answer}</h1>
      </section>
    </div>
  );
};

export default SingleFlashcard;
