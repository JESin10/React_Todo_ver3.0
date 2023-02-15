// 중앙 데이터 관리소를 설정하는 부분
import {createStore} from "redux";
import { combineReducers } from "redux";
import todos from '../modules/Todos';

//reducer의 묶음
const roofReducer = combineReducers({
  todos,

});
const store = createStore(roofReducer); // 인자는 reducer 묶음인 Rootreducer 들어가야 함
// 여기있는 todos가 useSelector로 선택

export default store;