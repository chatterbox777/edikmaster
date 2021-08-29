import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./Users/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
