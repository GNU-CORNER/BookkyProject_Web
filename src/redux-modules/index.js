import { combineReducers } from "redux";
import userData from "./userData";
import modalOpen from "./loginModal";
import recommend from "./recommend";
import posts from "./posts";
import books from "./books";

// Reducer를 모두 합쳐주는 combineReducers => rootReducer 정의
const rootReducer = combineReducers({
  userData,
  modalOpen,
  recommend,
  posts,
  books,
});

export default rootReducer;
