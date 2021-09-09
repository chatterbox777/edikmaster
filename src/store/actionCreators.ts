import { SET_LOADING } from './Types/rootTypes';
import { SET_ALL_TICKETS, GET_SEARCH_ID, SET_STOP_REQUEST } from './Types/aviaTypes';
import {
  SET_CARS_LIST,
  SET_CHOSEN_COUNTRY,
  SET_CHOSEN_MAKER,
  SET_CHOSEN_MODEL,
  SET_COUNTRIES,
  SET_DATA_CARS,
  SET_VIN_OF_CAR,
  SET_YEAR_OF_CAR,
  SET_DATA_OF_CAR,
} from './Types/carsTypes';
import { SET_USER } from './Types/userTypes';

export const setUserActionCreator = ({ user }) => ({
  type: SET_USER,
  payload: user,
});

export const setDataCars = ({ cars }) => ({
  type: SET_DATA_CARS,
  payload: cars,
});

export const setCountries = ({ countries }) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setCarsList = ({ carsList }) => ({
  type: SET_CARS_LIST,
  payload: carsList,
});

export const setChosenMaker = ({ chosenMaker }) => ({
  type: SET_CHOSEN_MAKER,
  payload: chosenMaker,
});

export const setChosenModel = ({ chosenModel }) => ({
  type: SET_CHOSEN_MODEL,
  payload: chosenModel,
});

export const setChosenCountry = ({ chosenCountry }) => ({
  type: SET_CHOSEN_COUNTRY,
  payload: chosenCountry,
});

export const setVinOfCar = ({ vin }) => ({
  type: SET_VIN_OF_CAR,
  payload: vin,
});

export const setYearOfCar = ({ year }) => ({
  type: SET_YEAR_OF_CAR,
  payload: year,
});

export const setDataOfCar = ({ name, value }) => ({
  type: SET_DATA_OF_CAR,
  payload: { name, value },
});

export const getAllTickets = ({ tickets }) => ({
  type: SET_ALL_TICKETS,
  payload: tickets,
});
export const getSearchId = ({ searchId }) => ({
  type: GET_SEARCH_ID,
  payload: searchId,
});
export const setLoading = isLoading => ({
  type: SET_LOADING,
  payload: isLoading,
});
export const setStopRequest = ({ stopRequestValue }) => ({ type: SET_STOP_REQUEST, payload: stopRequestValue });
