import PropTypes from "prop-types";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";

const Shop = ({ products }) => {
  return (
    <>
      <div
        className="shop-bg blur-load"
        style={{ backgroundImage: "url(/images/bg1.jpg)" }}
      >
        <p className="wrapper | shop-bg-text"> All Products</p>
      </div>

      <div className="shop-products | wrapper">
        {products.map((product) => (
          <div key={product.id} className="shop-product">
            <Product product={product} />

            <div className="shop-details | spacer">
              <Link to={`/shop/product/${product.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>

      <Outlet />

      <Footer />
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.array,
};

export default Shop;
