import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlashcardsAsync, selectFlashcards } from "../slices/AllFlashcardsSlice";
import SingleFlashcard from "../components/SingleFlashcard";

const AllFlashcards = () => {
  const dispatch = useDispatch();
  const flashcards = useSelector(selectFlashcards);

  useEffect(() => {
    dispatch(fetchFlashcardsAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>All Flashcards</h1>
      <div>
        {flashcards.map((flashcard) => {
          return <SingleFlashcard key={flashcard.id} id={flashcard.id} flashcard={flashcard} />;
        })}
      </div>
    </div>
  )
};

export default AllFlashcards;