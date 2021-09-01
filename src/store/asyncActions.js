import { getCarsListForFilter } from "../Api/getCarsListForFilter";
import { carsActionCreators } from "./actionCreators";

export const asyncSetCarsListAction = () => {
  return async (dispatch, getState) => {
    let response = await getCarsListForFilter();
    dispatch(carsActionCreators.setCarsList({ carsList: response }));
  };
};
