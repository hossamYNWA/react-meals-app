import classes from "./MealForm.module.css";
import Input from "../../UI/Input.js";
import { React, useRef } from "react";
export default function MealForm(props) {
  const qty = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmt = +qty.current.value;
   // console.log(enteredAmt);
    props.onAddItem(enteredAmt);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="quantity"
        ref={qty}
        input={{
          id: "amount_" + props.id,
          defaultValue: 1,
          type: "number",
          min: 1,
          max: 5,
          step: 1
        }}
      />
      <button type="submit">+ add</button>
    </form>
  );
}
