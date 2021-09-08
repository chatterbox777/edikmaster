import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetCarsListAction, asyncSetCountriesAction, asyncSetDataCarsAction } from '../../store/asyncActions';
import { carsListSelector, countriesSelector, filteredCarsListSelector } from '../../store/selectors/selectors';

import classes from './CarsFilter.module.css';

import Cars from '../Cars/Cars';
import Filter from '../Filter/Filter';

export default function CarsFilter() {
  const carsList = useSelector(carsListSelector);
  const countries = useSelector(countriesSelector);
  const dataCars = useSelector(filteredCarsListSelector);

  const dispatch = useDispatch();

  console.log(dataCars);
  useEffect(() => {
    dispatch(asyncSetCarsListAction());
    dispatch(asyncSetCountriesAction());
    dispatch(asyncSetDataCarsAction());
  }, [dispatch]);
  return (
    <div className={classes.flex}>
      <Cars dataCars={dataCars} />
      <Filter carsList={carsList} countries={countries} />
    </div>
  );
}
