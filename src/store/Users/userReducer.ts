import { SET_USER } from '../Types/userTypes';

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export type RootState = ReturnType<typeof userReducer>;
