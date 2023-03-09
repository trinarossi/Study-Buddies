import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allFlashcardsSlice from "../features/slices/AllFlashcardsSlice";
import singleFlashcardSlice from "../features/slices/SingleFlashcardSlice";

/**
 * Redux store that imports all slices
 */
const store = configureStore({
  reducer: {
    auth: authReducer,
    flashcards: allFlashcardsSlice,
    singleFlashcard: singleFlashcardSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
