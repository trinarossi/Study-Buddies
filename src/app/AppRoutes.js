import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
//import AuthForm from "../features/auth/AuthForm";
import Home from "../features/pages/Home";
import AllFlashcards from "../features/pages/AllFlashcards";
import AuthForm from "../features/auth/AuthForm"
import { me } from "./store";
/**
 * Component for all approutes
 * @component contains logic which routes are accesible based on the user status (logged in/logged in as admin/not logged in)
 */
const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);
  const dispatch = useDispatch();

  // dispatches authentication and retrieves token once when component mounts
  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ?(
          // Routes for Logged in users
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/flashcards" element={<AllFlashcards />} />
          </Routes>
      ) : (
        // Routes for not logged in users
        <Routes>
          <Route to="/home" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/flashcards" element={<AllFlashcards />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;