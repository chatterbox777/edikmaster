import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { carsActionCreators } from "../../store/actionCreators";


export default function Input({ placeHolder, id }) {
  const [hasInputFired, setHasInputFired] = useState(false);

  const dispatch = useDispatch();

  let timeOut = useRef(null);

  function handleInput(e) {
    if (hasInputFired) {
      return;
    }
    if (e.target.value.length >= 5) {
      console.log(timeOut);
      clearTimeout(timeOut.current);
      timeOut.current = setTimeout(() => {
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
        setHasInputFired(true);
      }, 2000);
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
