import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchSingleDeckAsync = createAsyncThunk("decks/singleDeck", async (id) => {
  try {
    const { data } = await axios.get(`/api/decks/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const singleDeckSlice = createSlice({
  name: "singleDeck",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleDeckAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectSingleDeck = (state) => {
  return state.singleDeck;
};

export default singleDeckSlice.reducer;