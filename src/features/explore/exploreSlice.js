import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

// const { data: posts } = useFetch("http://localhost:5000/posts");
const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAsyncExplorePosts = createAsyncThunk(
  "posts/getAsyncExplorePosts",
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
// export const getAsyncExploreSinglePosts = createAsyncThunk(
//   "posts/getAsyncExplorePosts",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await api.get(`/posts/${payload.id}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const exploreSlice = createSlice({
  name: "explorePosts",
  initialState: {
    loading: false,
    posts: [],
    error: "",
  },

  extraReducers: {
    [getAsyncExplorePosts.pending]: (state, action) => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    },
    [getAsyncExplorePosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    },
    [getAsyncExplorePosts.rejected]: (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    },
    // [getAsyncExploreSinglePosts.pending]: (state, action) => {
    //   state.loading = true;
    //   state.post = [];
    //   state.error = "";
    // },
    // [getAsyncExploreSinglePosts.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.post = action.payload;
    //   state.error = "";
    // },
    // [getAsyncExploreSinglePosts.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.post = [];
    //   state.error = action.payload;
    // },
  },
});

export default exploreSlice.reducer;
