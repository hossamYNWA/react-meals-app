import { useContext } from "react";
import CartContext from "../../../store/cartContext.js";
import MealForm from "./MealForm.js";
import classes from "./MealItem.module.css";

export default function MealItem(props) {
  const price = `SAR${props.price}`;
  const cartctx = useContext(CartContext);
  const AddItemToCart = (amt) => {
    cartctx.addItem({
      name: props.name,
      id: props.id,
      price: props.price,
      qty: amt
    });
   // console.log(cartctx);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealForm id={props.id} onAddItem={AddItemToCart} />
      </div>
    </li>
  );
}
