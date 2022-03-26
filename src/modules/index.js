import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import userData from "./userData";
import modalOpen from "./loginModal";

// 리듀서들을 합쳐주는 combineReducers
const rootReducer = combineReducers({
  counter,
  todos,
  userData,
  modalOpen,
});

export default rootReducer;
