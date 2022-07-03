import React, { useContext } from "react";
import CartContext from "../../store/cartContext.js";
import CartIcon from "../cart/CartIcon.js";
import classes from "./CartBtn.module.css";

export default function CartBtn(props) {
  const cartCtx = useContext(CartContext);
  const totalAddedMeals = cartCtx.items.reduce(
    (acc, item) => acc + item.qty,
    0
  );
  return (
    <button onClick={props.oncrtClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAddedMeals}</span>
    </button>
  );
}
