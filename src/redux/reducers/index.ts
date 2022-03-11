import { combineReducers } from "redux";
import playersReducer from "./playersReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  players: playersReducer,
});

export default rootReducer;
