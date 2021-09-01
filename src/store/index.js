import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { carsReducer } from "./Cars/carsReducer";
import { userReducer } from "./Users/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cars: carsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
