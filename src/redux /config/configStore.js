// 중앙 데이터 관리소를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/Todos";
import todo from "../modules/Todos";
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const store = configureStore({
  reducer: {
  todos,
  // comment,
  // comments,
  // todo,
  },
}, composeWithDevTools())


export default store;