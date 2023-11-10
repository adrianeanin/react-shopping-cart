import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <div className="product | flow">
        <div className="product-img">
          <Link to={`/shop/product/${product.id}`}>
            <div
              className="blur-load rounded-image"
              style={{ backgroundImage: `url(${product.bgImg})` }}
            >
              <img
                loading="lazy"
                src={product.image}
                alt={product.title}
                className="rounded-image"
              />
            </div>
          </Link>
        </div>

        <div className="spacer">{product.title}</div>
        <div className="spacer">${product.price}</div>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
