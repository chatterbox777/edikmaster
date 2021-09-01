import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./Select.module.css";

export default function Select({ labelId, labelText, carsList, countries }) {
  const [options, setOptions] = useState([]);
  const chosenCarMaker = null;
  useEffect(() => {
    switch (labelId) {
      case "maker_selector":
        let arrOfBrand = carsList.map((el) => el.brand);
        let resultArr = arrOfBrand.sort((a, b) => a.localeCompare(b));
        setOptions(resultArr);
        break;
      case "model_selector":
        break;
      case "country_selector":
        break;

      default:
        break;
    }
  }, [carsList, countries]);

  return labelId === "model_selector" && !chosenCarMaker ? null : (
    <div className={classes.select}>
      <label for={labelId}> {labelText} </label>
      <select id={labelId}>
        <option disabled>{labelText}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
