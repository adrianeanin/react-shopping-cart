import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.product.id}>
                <strong>{item.product.title}</strong> - Quantity:{" "}
                {item.quantity} - Price: ${item.product.price.toFixed(2)} -
                Total: ${(item.product.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
};

export default Cart;
