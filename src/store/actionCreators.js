import { SET_USER } from "./Types/userTypes";

export const usersActionCreators = {
  setUserActionCreator: ({ user }) => ({ type: SET_USER, payload: user }),
};
