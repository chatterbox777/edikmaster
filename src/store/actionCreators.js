import {
  SET_CARS_LIST,
  SET_CHOSEN_COUNTRY,
  SET_CHOSEN_MAKER,
  SET_CHOSEN_MODEL,
  SET_COUNTRIES,
  SET_DATA_CARS,
  SET_VIN_OF_CAR,
  SET_YEAR_OF_CAR,
} from "./Types/carsTypes";
import { SET_USER } from "./Types/userTypes";

export const usersActionCreators = {
  setUserActionCreator: ({ user }) => ({ type: SET_USER, payload: user }),
};
export const carsActionCreators = {
  setDataCars: ({ cars }) => {
    return {
      type: SET_DATA_CARS,
      payload: cars,
    };
  },
  setCountries: ({ countries }) => {
    return {
      type: SET_COUNTRIES,
      payload: countries,
    };
  },
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
  setChosenModel: ({ chosenModel }) => ({
    type: SET_CHOSEN_MODEL,
    payload: chosenModel,
  }),
  setChosenCountry: ({ chosenCountry }) => ({
    type: SET_CHOSEN_COUNTRY,
    payload: chosenCountry,
  }),
  setVinOfCar: ({ vin }) => ({
    type: SET_VIN_OF_CAR,
    payload: vin,
  }),
  setYearOfCar: ({ year }) => ({
    type: SET_YEAR_OF_CAR,
    payload: year,
  }),
};
