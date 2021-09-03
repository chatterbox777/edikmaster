import React from "react";
import { useDispatch } from "react-redux";
import { carsActionCreators } from "../../store/actionCreators";
import classes from "./Input.module.css";

export default function Input({ placeHolder, id }) {
  const dispatch = useDispatch();
  function handleInput(e) {
    switch (id) {
      case "year":
        dispatch(carsActionCreators.setYearOfCar({ year: +e.target.value }));
        break;
      case "vin":
        dispatch(carsActionCreators.setVinOfCar({ vin: e.target.value }));
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <input
        onInput={handleInput}
        type={id === "year" ? "number" : "text"}
        placeholder={placeHolder}
      />
    </div>
  );
}
