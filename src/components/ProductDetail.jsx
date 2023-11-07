import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { ShopContext } from "../ShopContext";

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems } = useContext(ShopContext);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) return;

    addToCart(product, quantity);
  };

  return (
    <>
      <div className="product-container">
        <div className="product-img"></div>
        <div className="product-description">
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>Product description</p>
          <p>{product.text}</p>
          <p>Quantity: {quantity}</p>
          <div>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add" onClick={handleAddToCart}>
            {cartItems.some((item) => item.product.id === product.id)
              ? "Already in cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object,
};

export default ProductDetail;
