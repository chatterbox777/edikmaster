import {
  getCarsListForFilter,
  getCountriesForFilter,
  getDataCarsForFilter,
} from "../Api/getCarsListForFilter";
import { carsActionCreators } from "./actionCreators";

export const asyncSetCarsListAction = () => {
  return async (dispatch, getState) => {
    let response = await getCarsListForFilter();
    dispatch(carsActionCreators.setCarsList({ carsList: response }));
  };
};
export const asyncSetCountriesAction = () => {
  return async (dispatch, getState) => {
    let response = await getCountriesForFilter();
    dispatch(carsActionCreators.setCountries({ countries: response }));
  };
};
export const asyncSetDataCarsAction = () => {
  return async (dispatch, getState) => {
    let response = await getDataCarsForFilter();
    dispatch(carsActionCreators.setDataCars({ cars: response }));
  };
};
