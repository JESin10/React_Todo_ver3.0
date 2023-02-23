import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 전체 조회하기
export const __getTodoThunk = createAsyncThunk(
  "GET_TODO",
  async(payload, thunkAPI) => {
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);    
    }
  }
);

// 추가하기
export const __addTodoThunk = createAsyncThunk(
  "ADD_TODO",
  async(payload, thunkAPI) => {
    try {
      const {data} = await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);    
    }
  }
);

// 삭제하기
export const __deleteTodoThunk = createAsyncThunk(
  "DELETE_TODO",
  async(payload, thunkAPI) => {
    try {
      // const response = axios.delete(`http://localhost:4000/todos/${payload}`);
      axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);    
    }
  }
);

// 상세보기 조회
export const __getTodoAboutThunk = createAsyncThunk(
  "GET_TODO_ABOUT",
  async(payload, thunkAPI) => {
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);    
    }
  }
);

// 수정하기
export const __editTodoThunk = createAsyncThunk(
  "EDIT_TODO",
  async(payload, thunkAPI) => {
    try {
      axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${payload.id}`,payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);    
    }
  }
);

//초기 스테이트
const initialState = {
  todos: [],
  error : null,
  // isSuccess : false,
};

// add, delete, edit => reducers, get => extrareducers
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodoThunk.fulfilled] : (state, action) =>{
      // state.isSuccess= true;
      state.todos = action.payload
    },
    [__addTodoThunk.fulfilled] : (state, action) =>{
      state.todos.push(action.payload);
    },
    [__getTodoAboutThunk.fulfilled] : (state, action) =>{
      state.todos = action.payload
    },
    [__deleteTodoThunk.fulfilled] : (state, action) =>{
      const result = state.todos.filter((todo) => todo.id !==action.payload);
      state.todos=result
    },
    [__editTodoThunk.fulfilled] : (state, action) =>{
      state.todos = action.payload
    }
    // [__deleteTodoThunk.pending] : () => {},

  },
});

export default todoSlice.reducer;
export const {} = todoSlice.actions;