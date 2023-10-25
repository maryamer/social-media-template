import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// http://localhost:5000/todos
// axios.defaults.baseURL = "http://localhost:5000/todos";
const api = axios.create({
  baseURL: "http://localhost:5000",
});
// getTodos, addTodos,toggleTodos ,removeTodos
export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addAsyncTodo = createAsyncThunk(
  "todos/addAsyncTodo",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await api.post(`/todos`, {
        title: payload.title,
        id: Date.now(),
        completed: false,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteAsyncTodo = createAsyncThunk(
  "todos/deleteAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      await api.delete(`/todos/${payload.id}`);
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const toggleAsyncTodo = createAsyncThunk(
  "todos/toggleAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      await api.patch(`/todos/${payload.id}`, {
        completed: !payload.completed,
      });
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    todos: [
      { id: 1, title: "todo 1", completed: false },
      { id: 2, title: "todo 2", completed: false },
    ],
    error: "",
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((item) => item.id == action.payload.id);
      todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getAsyncTodos.pending]: (state, action) => {
      state.loading = true;
      state.todos = [];
      state.error = "";
    },
    [getAsyncTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
      state.error = "";
    },
    [getAsyncTodos.rejected]: (state, action) => {
      state.loading = false;
      state.todos = [];
      state.error = action.payload;
    },
    [addAsyncTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [addAsyncTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
      state.error = "";
    },
    [deleteAsyncTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter((item) => item.id != action.payload.id);
      state.error = "";
    },
    [toggleAsyncTodo.fulfilled]: (state, action) => {
      state.loading = false;
      const todo = state.todos.find((item) => item.id == action.payload.id);
      todo.completed = !todo.completed;
      state.error = "";
    },
  },
});
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
