// import { useSelector } from "react-redux";
import { useAppSelector } from "../store/hooks.ts";
import { useState } from "react";
import { Cart } from "./Cart.tsx";

export const Header = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  // const items = useSelector((state) => tate.cart.items)
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((val, item) => val + item.quantity, 0)
  );

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
};
