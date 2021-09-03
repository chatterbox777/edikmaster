import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsActionCreators } from "../../store/actionCreators";
import classes from "./Select.module.css";

export default function Select({ labelId, labelText, carsList, countries }) {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const { chosenMaker } = useSelector((state) => state.cars);

  function handleSelect(e) {
    switch (labelId) {
      case "maker_selector":
        dispatch(
          carsActionCreators.setChosenMaker({ chosenMaker: e.target.value })
        );
        break;

      case "model_selector":
        dispatch(
          carsActionCreators.setChosenModel({ chosenModel: e.target.value })
        );
        break;

      case "country_selector":
        let value =
          countries.find((el) => el.name === e.target.value)?.code ?? "";
        dispatch(carsActionCreators.setChosenCountry({ chosenCountry: value }));
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    switch (labelId) {
      case "maker_selector":
        if (carsList) {
          let arrOfBrand = carsList.map((el) => el.brand);
          let resultArr = arrOfBrand.sort((a, b) => a.localeCompare(b));
          setOptions(resultArr);
        }

        break;
      case "model_selector":
        if (chosenMaker) {
          let currentBrandObject = carsList.find(
            (el) => el.brand === chosenMaker
          );
          setOptions(currentBrandObject.models);
        }

        break;

      case "country_selector":
        if (countries) {
          let resultArrCountries = countries.map((el) => el.name);
          setOptions(resultArrCountries);
        }

        break;

      default:
        break;
    }
  }, [carsList, countries, chosenMaker]);

  return labelId === "model_selector" && !chosenMaker ? null : (
    <div className={classes.select}>
      <label for={labelId}> {labelText} </label>
      <select onChange={handleSelect} id={labelId}>
        <option disabled>{labelText}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
