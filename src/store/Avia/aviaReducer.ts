import { SET_ALL_TICKETS, GET_SEARCH_ID } from './../Types/aviaTypes';

const initialState = {
  tickets: [],
  searchId: null,
};

export const aviaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TICKETS:
      return { ...state, tickets: action.payload };
    case GET_SEARCH_ID:
      return { ...state, searchId: action.payload };
    default:
      return state;
  }
};
