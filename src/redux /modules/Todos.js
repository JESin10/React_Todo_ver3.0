// value 만들기
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = 'EDIT_TODO';
const DETAIL_TODO = 'DETAIL_TODO';


// 추가 액션크리에이터
export const AddTodo = (payload) => {
  return {type : ADD_TODO, payload};
};
// 삭제 액션크리에이터
export const DeleteTodo = (payload) => {
  return {type : DELETE_TODO, payload};
};

// 완료-취소 액션크리에이터
export const EditTodo = (payload) => {
  return {type : EDIT_TODO, payload};
};

// 해당하는 상세페이지 불러오기 액션크리에이터
export const DetailTodo = (payload) => {
  return {type : DETAIL_TODO, payload};
};

//초기 스테이트
const initialState = {
  todos : [
    {
    id : 'id1',
    title : "react 공부하기",
    content : "열심히하기!",
    isDone : false
    },
    {
      id : 'id2',
      title : "redux 공부하기",
      content : "열심히하기!!",
      isDone : true
    },
  ],
  todo: {
    id: '0',
    title : '',
    content : '',
    isDone : false
  },
};

const todos = (state = initialState, action) =>{

  switch (action.type) {
    case ADD_TODO :
      return {
        ...state,
        todos : [...state.todos, action.payload],
      };

      case DELETE_TODO :
      return {
        ...state,
        todos : state.todos.filter ((todo) => todo.id !==action.payload),
    };

    case EDIT_TODO :
      return {
        ...state,
        todos : state.todos.map((todo) => {
          if(todo.id === action.payload){
            return {
              ...todo,
              isDone : !todo.isDone,
            };
          } else {
            return todo; 
          }
        }),
      };
      
      // find의 경우 해당값을 제외하고 다 보여주지 않기 때문에, 
      // 기존배열인 todos가 아니라 빈배열인 todo에 넣어주어야 함. todos로 하면 이전값이 없어져서 안보임?
      
      case DETAIL_TODO :
      return {
        ...state,
        todo : state.todos.find((todo) => {
          return todo.id === action.payload;

        }),
      };

    default :
      return state;
  }
};

export default todos;