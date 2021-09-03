import React from "react";
import { useEffect } from "react";

import { useState } from "react";
import Input from "../../Shared/Input/Input";
import Select from "../../Shared/Select/Select";
import classes from "./Filter.module.css";

export default function Filter({ carsList, countries }) {
  const [selectors, setSelectors] = useState([
    { labelId: "maker_selector", labelText: "Выберите марку авто" },
    { labelId: "model_selector", labelText: "Выберите модель авто" },
    { labelId: "country_selector", labelText: "Выберите страну авто" },
  ]);
  const [inputs, setInputs] = useState([
    { id: "year", placeHolder: "год выпуска" },
    { id: "vin", placeHolder: "vin автомобиля" },
  ]);
  useEffect(() => {}, [carsList, countries]);
  return (
    <div className={classes.filter}>
      {inputs.map((input) => (
        <Input placeHolder={input.placeHolder} id={input.id} />
      ))}
      {selectors.map((selector) => (
        <Select
          key={selector.labelId}
          labelId={selector.labelId}
          labelText={selector.labelText}
          carsList={carsList}
          countries={countries}
        />
      ))}
    </div>
  );
}
