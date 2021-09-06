import {
  getCarsListForFilter,
  getCountriesForFilter,
  getDataCarsForFilter,
} from "../Api/getCarsListForFilter";

import * as carsActionCreators from "./actionCreators";

export const asyncSetCarsListAction = () => async (dispatch) => {
  const response = await getCarsListForFilter();

  dispatch(carsActionCreators.setCarsList({ carsList: response }));
};

export const asyncSetCountriesAction = () => async (dispatch) => {
  const response = await getCountriesForFilter();

  dispatch(carsActionCreators.setCountries({ countries: response }));
};

export const asyncSetDataCarsAction = () => async (dispatch) => {
  const response = await getDataCarsForFilter();

  dispatch(carsActionCreators.setDataCars({ cars: response }));
};
