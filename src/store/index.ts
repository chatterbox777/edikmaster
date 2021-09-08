import { SET_LOADING } from './Types/rootTypes';
import { aviaReducer } from './Avia/aviaReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { carsReducer } from './Cars/carsReducer';
import { userReducer } from './Users/userReducer';

const initialState = {
  isLoading: false,
};

const rootInitalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  root: rootInitalReducer,
  user: userReducer,
  cars: carsReducer,
  avia: aviaReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
