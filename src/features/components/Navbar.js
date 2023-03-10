import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { fetchPetAsync, selectPet } from "../slices/PetSlice";
import { fetchSingleUser, selectSingleUser } from "../slices/UserSlice";
import { logout } from "../../app/store"
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);
  const dispatch = useDispatch();
  const user = useSelector(selectSingleUser);
  const { id } = useSelector((state) => state.auth.me);
  const Navigate = useNavigate;

  useEffect(() => {
      dispatch(fetchSingleUser(id));
    }, [dispatch, id]);

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    Navigate("/home");
  };

  return (
    <nav>
      {isLoggedIn ? (
        isAdmin ? (
          <div className={styles.container}>
            <h1>Study Buddies</h1>
            <Link to="/home">Home</Link>
            <Link to="/flashcards">All Flashcards</Link>
            <Link>My Decks</Link>
            <Link>My Pet</Link>
            <button onClick={logoutAndRedirectHome}>Logout</button>
            <p>{user.pet?.points}</p>
          </div>
        ) : (
          <div className={styles.container}>
            <h1>Study Buddies</h1>
            <Link to="/home">Home</Link>
            <Link to="/flashcards">All Flashcards</Link>
            <Link>My Decks</Link>
            <Link>My Pet</Link>
            <button onClick={logoutAndRedirectHome}>Logout</button>
            <p>{user.pet?.points}</p>
          </div>
        )
      ) : (
        <div className={styles.container}>
          <h1>Study Buddies</h1>
          <Link to="/home">Home</Link>
          <Link>Pets</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Create An Account</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
