import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDecksAsync, selectDecks } from "../slices/AllDecksSlice";

const AllDecks = () => {
  const dispatch = useDispatch();
  const decks = useSelector(selectDecks);

  useEffect(() => {
    dispatch(fetchDecksAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>All Decks</h1>
      <div>
        {decks?.map((deck) => (
          <Link>
            <div key={deck.id}>
              <h1>{deck.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllDecks;
