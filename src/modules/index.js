import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import userData from "./userData";
import modalOpen from "./loginModal";
import recommend from "./recommend";

// 리듀서들을 합쳐주는 combineReducers
const rootReducer = combineReducers({
  counter,
  todos,
  userData,
  modalOpen,
  recommend,
});

export default rootReducer;
