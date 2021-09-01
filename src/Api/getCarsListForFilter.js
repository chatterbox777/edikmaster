import axios from "axios";

export const getCarsListForFilter = async () => {
  try {
    let response = await axios.get("car-list.json");
    return response.data;
  } catch (error) {
    throw new Error("can't download carList.json");
  }
};
