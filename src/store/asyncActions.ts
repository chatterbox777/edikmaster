import { getAllTickets, getSearchId } from './../Api/getTicketsForAvia';
import { getCarsListForFilter, getCountriesForFilter, getDataCarsForFilter } from '../Api/getCarsListForFilter';

import * as actionCreators from './actionCreators';

export const asyncSetCarsListAction = () => async dispatch => {
  const response = await getCarsListForFilter();

  dispatch(actionCreators.setCarsList({ carsList: response }));
};

export const asyncSetCountriesAction = () => async dispatch => {
  const response = await getCountriesForFilter();

  dispatch(actionCreators.setCountries({ countries: response }));
};

export const asyncSetDataCarsAction = () => async dispatch => {
  const response = await getDataCarsForFilter();

  dispatch(actionCreators.setDataCars({ cars: response }));
};

export const asyncGetAllTicketsAction =
  ({ searchId }) =>
  async dispatch => {
    try {
      dispatch(actionCreators.setLoading(true));
      const response = await getAllTickets({ searchId });
      await dispatch(actionCreators.getAllTickets({ tickets: response.tickets }));
      await dispatch(actionCreators.setStopRequest({ stopRequestValue: response.stop }));
    } catch (error) {
      console.error(new Error(error.message));
    } finally {
      dispatch(actionCreators.setLoading(false));
    }
  };

export const asyncGetSearchIdAction = () => async dispatch => {
  const { searchId } = await getSearchId();
  dispatch(actionCreators.getSearchId({ searchId }));
};
