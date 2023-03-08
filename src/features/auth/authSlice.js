import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TOKEN = "token";

/**
 * async thunk that authorizes a user through an AJAX request
 * receives the token from local storage when user is logged in
 * @returns authentication confirmation
 * @catches error if database request goes wrong
 */
export const me = createAsyncThunk("auth/me", async () => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if (token) {
      const res = await axios.get("/auth/me", {
        headers: {
          authorization: token,
        },
      });
      return res.data;
    } else {
      return {};
    }
  } catch (err) {
    if (err.response.data) {
      return thunkAPI.rejectWithValue(err.response.data);
    } else {
      return "There was an issue with your request.";
    }
  }
});

/**
 * async thunk that authenticates a user through an AJAX request
 * @param {object} userInfo to send to the database to create a new user
 * creates a token
 * @catches error if database request goes wrong
 */
export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async ({ username, password, method }, thunkAPI) => {
    try {
      const res = await axios.post(`/auth/${method}`, { username, password });
      window.localStorage.setItem(TOKEN, res.data.token);
      thunkAPI.dispatch(me());
    } catch (err) {
      if (err.response.data) {
        return thunkAPI.rejectWithValue(err.response.data);
      } else {
        return "There was an issue with your request.";
      }
    }
  }
);

/**
 * authentication slice
 * initialState is set as an object with me object and error
 * a regular reducer is used whenever a user logs out
 * fetchStudents returns our entire student array we received from the database
 * all reducers are setting AJAX responses as state
 */
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: {},
    error: null,
  },
  reducers: {
    logout(state, action) {
      window.localStorage.removeItem(TOKEN);
      state.me = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(me.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(me.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

/*
 * logout reducer is now useable on the frontend
 */
export const { logout } = authSlice.actions;

/*
exporting the authSlice
*/
export default authSlice.reducer;
