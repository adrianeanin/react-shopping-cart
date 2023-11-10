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
      <div className="product-container | wrapper ">
        <div className="blur-load">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            style={{ backgroundImage: `url(${product.bgImg})` }}
          />
        </div>

        <div className="product-description | flow">
          <h2>{product.title}</h2>

          <p>${product.price}</p>

          <div className="product-description-text">
            <p>Product description</p>
            <p>{product.description}</p>
          </div>

          {cartItems.some((item) => item.product.id === product.id) ? (
            <p>Already in cart</p>
          ) : (
            <>
              <div className="action-buttons">
                <button onClick={handleDecrement}>-</button>
                <p>{quantity}</p>
                <button onClick={handleIncrement}>+</button>
              </div>

              <button className="add" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object,
};

export default ProductDetail;
