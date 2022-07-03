import "./styles.css";
import Header from "./components/layout/Header.js";
import MealsSummary from "./components/meals/MealsSummary.js";
import AvalMeals from "./components/meals/AvalMeals.js";
import { useState } from "react";
import Cart from "./components/cart/Cart.js";
import OrderModal from "./components/cart/OrderModal.js";
import CartProvider from "./store/CartProvider.js";

export default function App() {
  const [showCartstate, setShowCart] = useState(false);
  const [showOrderstate, setShowOrder] = useState(false);
  const [qnty, setqnty] = useState(0);
  const showOrderModal = () => {
    setShowOrder(true);
    setShowCart(false);
  };
  const showCart = () => setShowCart(true);
  const hideCart = () => {
    setShowCart(false);
    setShowOrder(false);
  };
  const onAddingMeals = (q) => {
    setqnty((qnty) => +qnty + q);
  };
  return (
    <CartProvider>
      {showCartstate && <Cart onOrder={showOrderModal} onClose={hideCart} />}
      {showOrderstate && <OrderModal onClick={hideCart} />}
      <Header onBtnClick={showCart} qnty={qnty} />
      <MealsSummary />
      <AvalMeals onAdd={onAddingMeals} />
    </CartProvider>
  );
}
