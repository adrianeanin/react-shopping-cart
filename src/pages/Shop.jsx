import PropTypes from "prop-types";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";

const Shop = ({ products }) => {
  return (
    <>
      <h1>Shop Page</h1>
      <div className="shop-bg">All Products</div>
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
          <Link to={`/shop/product/${product.id}`}>View Details</Link>
        </div>
      ))}

      <Outlet />

      <Footer />
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.array,
};

export default Shop;
