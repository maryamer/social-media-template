import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

// const { data: posts } = useFetch("http://localhost:5000/posts");
const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAsyncExplorePosts = createAsyncThunk(
  "explorePosts/getAsyncExplorePosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/posts");
      return response.data;
    } catch (error) {
      toast.error(error.messagge);
      return rejectWithValue(error.message);
    }
  }
);
export const getAsyncExploreSinglePost = createAsyncThunk(
  "explorePosts/getAsyncExploreSinglePost",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.get(`/posts/${payload.id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const exploreSlice = createSlice({
  name: "explorePosts",
  initialState: {
    loading: false,
    posts: [],
    error: "",
    post: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncExplorePosts.pending, (state, action) => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    }),
      builder.addCase(getAsyncExplorePosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = "";
      });
    builder.addCase(getAsyncExplorePosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });

    builder.addCase(getAsyncExploreSinglePost.pending, (state, action) => {
      state.loading = true;
      state.post = {};
      state.error = "";
    });
    builder.addCase(getAsyncExploreSinglePost.fulfilled, (state, action) => {
      state.loading = true;
      state.post = action.payload;
      state.error = "";
    });
    builder.addCase(getAsyncExploreSinglePost.rejected, (state, action) => {
      state.loading = false;
      state.post = {};
      state.error = action.payload;
    });
  },
});

export default exploreSlice.reducer;
