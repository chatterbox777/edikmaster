import {
  SET_CHOSEN_MAKER,
  SET_CARS_LIST,
  SET_COUNTRIES,
  SET_VIN_OF_CAR,
  SET_YEAR_OF_CAR,
  SET_CHOSEN_MODEL,
  SET_CHOSEN_COUNTRY,
  SET_DATA_CARS,
  SET_DATA_OF_CAR,
} from '../Types/carsTypes';

const initialState = {
  dataCars: null,
  carsList: null,
  countries: null,
  chosenMaker: null,
  chosenModel: null,
  chosenCountry: null,
  vinOfCar: null,
  yearOfCar: null,
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_CARS:
      return { ...state, dataCars: action.payload };
    case SET_COUNTRIES:
      return { ...state, countries: action.payload };
    case SET_CARS_LIST:
      return { ...state, carsList: action.payload };
    case SET_CHOSEN_MAKER:
      return { ...state, chosenMaker: action.payload };
    case SET_CHOSEN_MODEL:
      return { ...state, chosenModel: action.payload };
    case SET_CHOSEN_COUNTRY:
      return { ...state, chosenCountry: action.payload };
    case SET_VIN_OF_CAR:
      return { ...state, vinOfCar: action.payload };
    case SET_YEAR_OF_CAR:
      return { ...state, yearOfCar: action.payload };
    case SET_DATA_OF_CAR: {
      const { name, value } = action.payload;

      return { ...state, [name]: value };
    }
    default:
      return state;
  }
};
