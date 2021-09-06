import axios from "axios";

export const getCarsListForFilter = async () => {
  try {
    let response = await axios.get("car-list.json");
    return response.data;
  } catch (error) {
    throw new Error("can't download carList.json");
  }
};

export const getCountriesForFilter = async () => {
  try {
    let response = await axios.get("countries.json");
    return response.data;
  } catch (error) {
    throw new Error("can't download countries.json");
  }
};

export const getDataCarsForFilter = async () => {
  try {
    let response = await axios.get("dataCars.json");
    return response.data;
  } catch (error) {
    throw new Error("can't download dataCars.json");
  }
};
