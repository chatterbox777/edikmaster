import { createSelector } from 'reselect';

export const isLoadingSelector = state => state.root.isLoading;
export const dataCarsSelector = state => state.cars.dataCars;
export const searchIdAviaSelector = state => state.avia.searchId;
export const ticketsAviaSelector = state => state.avia.tickets.tickets;

export const selectorDataCars = state => state.cars;

export const carsListSelector = state => state.cars.carsList;
export const countriesSelector = state => state.cars.countries;
export const chosenMakerSelector = state => state.cars.chosenMaker;
export const chosenModelSelector = state => state.cars.chosenModel;
export const chosenCountrySelector = state => state.cars.chosenCountry;
export const vinOfCarSelector = state => state.cars.vinOfCar;
export const yearOfCarSelector = state => state.cars.yearOfCar;

export const filteredCarsListSelector = createSelector(
  dataCarsSelector,
  chosenMakerSelector,
  chosenModelSelector,
  chosenCountrySelector,
  vinOfCarSelector,
  yearOfCarSelector,
  (data, maker, model, country, vin, year) => {
    const searchObj = {};
    if (maker) {
      searchObj['maker'] = maker;
    }
    if (model) {
      searchObj['model'] = model;
    }
    if (country) {
      searchObj['country'] = country;
    }
    if (vin) {
      searchObj['vin'] = vin;
    }
    if (year) {
      searchObj['year'] = year;
    }
    console.log(searchObj);
    if (data) {
      let result;
      return data.filter(carObj => {
        for (const key in searchObj) {
          if (searchObj[key]) {
            if (carObj[key] === searchObj[key]) {
              result = true;
            } else {
              return false;
            }
          }
        }

        return result;
      });
    }

    return [];
  },
);
