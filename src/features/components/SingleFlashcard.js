import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPetAsync } from "../slices/PetSlice";
import { fetchSingleUser, selectSingleUser } from "../slices/UserSlice";

const SingleFlashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(selectSingleUser);
  const { id } = useSelector((state) => state.auth.me);
  const petId = user.pet?.id;
  const newPoints = () => {
    return user.pet?.points + 1;
  };

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch, id]);

  const handleAddPoint = () => {
    dispatch(editPetAsync({ id: petId, points: newPoints() }));
    console.log("added");
  };

  return (
    <div className={`card ${flip ? "flip" : ""}`}>
      <section className="front">
        <h1>{flashcard.question}</h1>
        <div>
          <ol type="A">
            {flashcard.options.map((option) => {
              return (
                <li
                  onClick={() => {
                    console.log(option);
                    console.log(flashcard.answer);
                    if (option === flashcard.answer) {
                      handleAddPoint();
                    };
                    setFlip(!flip);
                  }}
                >
                  {option}
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      <section className="back">
        <h1>{flashcard.answer}</h1>
      </section>
    </div>
  );
};

export default SingleFlashcard;
