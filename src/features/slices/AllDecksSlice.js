import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDecksAsync = createAsyncThunk("decks/fetchAll", async () => {
  try {
    const { data } = await axios.get("/api/decks");
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const allDecksSlice = createSlice({
  name: "decks",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDecksAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectDecks = (state) => {
  return state.decks;
};

export default allDecksSlice.reducer;