import PropTypes from "prop-types";

const ProductDetail = ({ product }) => {
  return (
    <>
      <div className="product-container">
        <div className="product-img"></div>
        <div className="product-description">
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>Product description</p>
          <p>{product.text}</p>
          <p>Quantity</p>
          <p>Plus Minus</p>

          <button className="add">Add to cart</button>
        </div>
      </div>
    </>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object,
};

export default ProductDetail;
