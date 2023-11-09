import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import Cart from "./Cart";
import { ShopContext } from "../ShopContext";

const Header = () => {
  const [isCartVisible, setCartVisibility] = useState(false);
  const { cartItems } = useContext(ShopContext);

  const handleCartClick = () => {
    setCartVisibility(!isCartVisible);
  };

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <header className="wrapper">
      <nav>
        <NavLink
          to="shop"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Furn
        </NavLink>

        <div className="header-bag-container">
          <div className="header-bag" onClick={handleCartClick}>
            Bag
          </div>
          <div className="header-count">{totalQuantity}</div>
        </div>
      </nav>

      {isCartVisible && <Cart />}
    </header>
  );
};

export default Header;
