import { SET_CARS_LIST, SET_CHOSEN_MAKER } from "./Types/carsTypes";
import { SET_USER } from "./Types/userTypes";

export const usersActionCreators = {
  setUserActionCreator: ({ user }) => ({ type: SET_USER, payload: user }),
};
export const carsActionCreators = {
  setCarsList: ({ carsList }) => {
    return {
      type: SET_CARS_LIST,
      payload: carsList,
    };
  },
  setChosenMaker: ({ chosenMaker }) => ({
    type: SET_CHOSEN_MAKER,
    payload: chosenMaker,
  }),
};
