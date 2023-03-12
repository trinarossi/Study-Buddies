import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleDeckAsync, selectSingleDeck } from "../slices/SingleDeckSlice";
import { useParams } from "react-router-dom";
import SingleFlashcard from "../components/SingleFlashcard";

const SingleDeck = () => {
  const dispatch = useDispatch();
  const deck = useSelector(selectSingleDeck);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleDeckAsync(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>{deck.name}</h1>
      <div>
        {deck.flashcards?.map((flashcard) => {
          return <SingleFlashcard key={flashcard.id} id={flashcard.id} flashcard={flashcard} />
        })}
      </div>
    </div>
  )
};

export default SingleDeck;