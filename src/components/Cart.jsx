import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../ShopContext";

const Cart = () => {
  const { cartItems, clearCart, increaseQuantity, setCartItems } =
    useContext(ShopContext);

  const handleDelete = (productId) => {
    const updatedCart = cartItems.filter(
      (item) => item.product.id !== productId
    );
    setCartItems(updatedCart);
  };

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.product.id}>
              <p>{item.product.title}</p>
              <p>Price: {item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: {Math.floor(item.product.price * item.quantity)}</p>
              <button onClick={() => handleIncreaseQuantity(item.product.id)}>
                Increase Quantity
              </button>
              <button onClick={() => handleDelete(item.product.id)}>
                Delete
              </button>
            </div>
          ))}
          <p>Total: {Math.floor(totalPrice)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
};

export default Cart;
