import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

// const { data: posts } = useFetch("http://localhost:5000/posts");
const api = axios.create({
  baseURL: "http://localhost:5000",
});
// https://rickandmortyapi.com/api/character
export const getAsyncAccountUser = createAsyncThunk(
  "accountUser/getAsyncAccountUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/accountUser");
      return response.data;
    } catch (error) {
      toast.error(error.messagge);
      return rejectWithValue(error.message);
    }
  }
);
export const editAsyncAccountUser = createAsyncThunk(
  "accountUser/editAsyncAccountUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(`/accountUser`, {
        ...payload.values,
        image: payload.image,
      });
      toast.success(`user data successfully edited`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const accountUserSlice = createSlice({
  name: "accountUser",
  initialState: {
    loading: false,
    error: "",
    accountUser: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncAccountUser.pending, (state, action) => {
      state.loading = true;
      state.user = {};
      state.error = "";
    }),
      builder.addCase(getAsyncAccountUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      });
    builder.addCase(getAsyncAccountUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
    builder.addCase(editAsyncAccountUser.pending, (state, action) => {
      state.loading = true;
      state.user = {};
      state.error = "";
    }),
      builder.addCase(editAsyncAccountUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      });
    builder.addCase(editAsyncAccountUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default accountUserSlice.reducer;
