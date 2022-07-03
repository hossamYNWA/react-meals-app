import React from "react";
import classes from "./Input.module.css";

function Input(props, ref) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
}
export default React.forwardRef(Input);
