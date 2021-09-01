import { SET_CHOSEN_MAKER, SET_CARS_LIST } from "../Types/carsTypes";

const initialState = {
  carsList: [],
  countries: [],
  chosenMaker: null,
  chosenModel: null,
  chosenCountry: null,
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS_LIST:
      debugger;
      return { ...state, carsList: action.payload };
    case SET_CHOSEN_MAKER:
      return { ...state, chosenMaker: action.payload };

    default:
      return state;
  }
};
