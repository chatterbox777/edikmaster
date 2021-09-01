import React from "react";
import classes from "./CarsFilter.module.css";
import Cars from "../Cars/Cars";
import Filter from "../Filter/Filter";
import { useEffect } from "react";
import { getCarsListForFilter } from "../../Api/getCarsListForFilter";
import { useState } from "react";
export default function CarsFilter() {
  const [carsList, setCarsList] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      let carsData = await getCarsListForFilter();
      setCarsList(carsData);
    })();
  }, []);
  return (
    <div className={classes.flex}>
      <Cars />
      <Filter carsList={carsList} />
    </div>
  );
}
