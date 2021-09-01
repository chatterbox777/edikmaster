import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={classes.main}>
      <Link to="/">Main</Link>
      <Link to="/carsFilter">CarsFilter</Link>
    </div>
  );
}
