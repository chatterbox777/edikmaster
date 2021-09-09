import { SET_ALL_TICKETS, GET_SEARCH_ID, SET_STOP_REQUEST } from './../Types/aviaTypes';

const initialState = {
  tickets: [],
  searchId: null,
  stopRequest: false,
};

export const aviaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TICKETS:
      return { ...state, tickets: [...state.tickets, action.payload].flat() };
    case GET_SEARCH_ID:
      return { ...state, searchId: action.payload };
    case SET_STOP_REQUEST:
      return { ...state, stopRequest: action.payload };
    default:
      return state;
  }
};
