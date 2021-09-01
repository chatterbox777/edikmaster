import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetCarsListAction } from "../../store/asyncActions";
import classes from "./CarsFilter.module.css";

import Cars from "../Cars/Cars";
import Filter from "../Filter/Filter";

export default function CarsFilter() {
  const { carsList } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncSetCarsListAction());
  }, []);
  return (
    <div className={classes.flex}>
      <Cars />
      <Filter carsList={carsList} />
    </div>
  );
}
