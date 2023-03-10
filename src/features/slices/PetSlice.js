import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPetAsync = createAsyncThunk("pet/fetchPet", async (id) => {
  try {
    const { data } = await axios.get(`/api/pet/${id}`);
    return data;
  } catch (err) {
    next(err);
  }
});

export const createPetAsync = createAsyncThunk("pet/createPet", async ({ id, name, petType }) => {
  const { data } = await axios.post(`/api/pet/${id}`, {
    name,
    petType
  });
  return data;
});

export const editPetAsync = createAsyncThunk(
  "pet/editPet",
  async ({ id, name, points }) => {
    try {
      const { data } = await axios.put(`/api/pet/${id}`, {
        name,
        points,
      });
      console.log("Afer axios put");
      return data;
    } catch (err) {
      next(err);
    }
  }
);

export const petSlice = createSlice({
  name: "pet",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPetAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createPetAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(editPetAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectPet = (state) => state.pet;

export default petSlice.reducer;
