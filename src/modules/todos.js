//액션 타입 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션생성 함수 만들기
// changeInput 액션은 파라미터가 필요하므로, input이라는 파라미터를 추가해줬다.
// 이때 id : id++ 은, id를 먼저 담고, 다음 등록할 todo를 위해 1증가 시킨다.

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;

export const insert = (text) => ({
  type: INSERT,
  todo: { id: id++, text, done: false },
});
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

//초기상태 및 리듀서 만들기
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(
          (todo) =>
            todo.id === action.id ? { ...todo, done: !todo.done } : todo
          //map함수를 통해 토글을 원하는 todo(action id)와 일치하는 todo의 done을 !done으로 바꾼다.
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
        // filter 함수 = 액션의 아이디(지우려는 todo)와 같지 않은 todo들로 새로운 배열을 만든다.
      };
    default:
      return state;
  }
}

export default todos;
