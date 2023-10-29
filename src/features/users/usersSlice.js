import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

// const { data: posts } = useFetch("http://localhost:5000/posts");
const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
// https://rickandmortyapi.com/api/character
export const getAsyncUsers = createAsyncThunk(
  "users/getAsyncUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/character");
      return response.data.results;
    } catch (error) {
      toast.error(error.messagge);
      return rejectWithValue(error.message);
    }
  }
);
export const getAsyncUser = createAsyncThunk(
  "users/getAsyncUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.get(`/character/${payload.id}`);
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: "",
    user: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncUsers.pending, (state, action) => {
      state.loading = true;
      state.users = [];
      state.error = "";
    }),
      builder.addCase(getAsyncUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      });
    builder.addCase(getAsyncUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    });

    builder.addCase(getAsyncUser.pending, (state, action) => {
      state.loading = true;
      state.user = {};
      state.error = "";
    });
    builder.addCase(getAsyncUser.fulfilled, (state, action) => {
      state.loading = true;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(getAsyncUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
