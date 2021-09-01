import React from "react";
import classes from "./Input.module.css";

export default function Input({ placeHolder }) {
  return (
    <div>
      <input type="text" placeholder={placeHolder} />
    </div>
  );
}
