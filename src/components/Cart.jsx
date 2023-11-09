import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../ShopContext";

const Cart = () => {
  const {
    cartItems,
    clearCart,
    increaseQuantity,
    reduceQuantity,
    setCartItems,
  } = useContext(ShopContext);

  const handleDelete = (productId) => {
    const updatedCart = cartItems.filter(
      (item) => item.product.id !== productId
    );
    setCartItems(updatedCart);
  };

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  const handleReduceQuantity = (productId) => {
    reduceQuantity(productId);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="cart-wrapper">
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? (
          <div className="cart | flow">
            <div className="cart-items-wrapper">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flow | cart-items">
                  <div className="cart-img">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="rounded-image"
                    />
                  </div>
                  <p className="spacer">{item.product.title}</p>
                  <p className="spacer">Price: {item.product.price}</p>
                  <p className="spacer">Quantity: {item.quantity}</p>
                  <p className="spacer">
                    Subtotal: {Math.floor(item.product.price * item.quantity)}
                  </p>

                  <div className="action-buttons | spacer">
                    <button
                      onClick={() => handleIncreaseQuantity(item.product.id)}
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleReduceQuantity(item.product.id)}
                    >
                      -
                    </button>

                    <button onClick={() => handleDelete(item.product.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p>Total: {Math.floor(totalPrice)}</p>
            <button onClick={clearCart} className="clear">
              Clear Cart
            </button>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
};

export default Cart;
