import { combineReducers } from "redux";
import userData from "./userData";
import modalOpen from "./loginModal";
import recommend from "./recommend";

// Reducer를 모두 합쳐주는 combineReducers => rootReducer 정의
const rootReducer = combineReducers({
  userData,
  modalOpen,
  recommend,
});

export default rootReducer;
