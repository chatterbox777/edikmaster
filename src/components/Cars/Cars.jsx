import React from "react";
import classes from "./Cars.module.css";

export default function Cars({ dataCars }) {
  return (
    <div className={classes.result}>
      {dataCars.length > 0 ? (
        dataCars.map((car) => (
          <li>
            {car.maker} {car.model}{" "}
          </li>
        ))
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
}
