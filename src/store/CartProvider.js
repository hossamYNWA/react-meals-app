import { useReducer } from "react";
import CartContext from "./cartContext";

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const addedItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems, updatedItem;
    if (addedItemIndex > -1) {
      if (state.items[addedItemIndex].qty === 5) {
        const sameState = { ...state };
        return sameState;
      }
      updatedItem = {
        ...state.items[addedItemIndex],
        qty: state.items[addedItemIndex].qty + action.item.qty
      };
      updatedItems = [...state.items];
      updatedItems[addedItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedAmount = state.amount + action.item.price * action.item.qty;
    return { items: updatedItems, amount: updatedAmount };
  } else if (action.type === "REMOVE") {
    let indexToDelete = state.items.findIndex((item) => item.id === action.id);
    let updatedItems;
    const updatedAmt = state.amount - state.items[indexToDelete].price;
    if (state.items[indexToDelete].qty === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      return { items: updatedItems, amount: updatedAmt };
    } else {
      const updatedItem = {
        ...state.items[indexToDelete],
        qty: state.items[indexToDelete].qty - 1
      };
      updatedItems = [...state.items];
      updatedItems[indexToDelete] = updatedItem;
      return { items: updatedItems, amount: updatedAmt };
    }
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(reducer, {
    items: [],
    amount: 0
  });
  const AddHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };
  let cartContext = {
    items: cartState.items,
    amount: cartState.amount,
    addItem: AddHandler,
    removeItem: removeHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
