// 중앙 데이터 관리소를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/Todos";
import todo from "../modules/Todos";

const store = configureStore({
  reducer: {
  todos,
  // comment,
  // comments,
  // todo,
  },
})


export default store;