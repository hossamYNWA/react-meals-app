import classes from "./Cart.module.css";
import Modal from "../UI/Modal.js";
import { useContext } from "react";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem.js";

export default function Cart(props) {
  const cartctx = useContext(CartContext);
  const onAddHandler = (item) => {
    cartctx.addItem({ ...item, qty: 1 });
  };
  const onRemoveHandler = (id) => {
    cartctx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((meal) => (
        <CartItem
          key={meal.id}
          name={meal.name}
          price={meal.price}
          qty={meal.qty}
          onAdd={onAddHandler.bind(null, meal)}
          onRemove={onRemoveHandler.bind(null, meal.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        {cartctx.items.length === 0 && (
          <p className={classes.msg}>Please fill your cart first</p>
        )}
        <span>total amount</span>
        <span>{cartctx.amount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button-alt"]}>
          close
        </button>
        {cartctx.items.length > 0 && (
          <button onClick={props.onOrder} className={classes.button}>
            order
          </button>
        )}
      </div>
    </Modal>
  );
}
