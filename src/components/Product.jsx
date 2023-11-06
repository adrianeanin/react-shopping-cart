import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <>
      <div className="product">
        <div>{product.image}</div>
        <div>{product.title}</div>
        <div>{product.price}</div>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
