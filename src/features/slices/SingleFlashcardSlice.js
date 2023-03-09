import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchSingleFlashcardAsync = createAsyncThunk("flashcards/singleFlashcard", async (id) => {
  try {
    const { data } = await axios.get(`/api/flashcards/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const singleFlashcardSlice = createSlice({
  name: "singleFlashcard",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleFlashcardAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectSingleFlashcard = (state) => {
  return state.singleFlashcard;
};

export default singleFlashcardSlice.reducer;