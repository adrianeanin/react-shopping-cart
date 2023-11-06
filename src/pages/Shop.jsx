import PropTypes from "prop-types";
// import ProductDetail from "../components/ProductDetail";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Shop = ({ products }) => {
  return (
    <>
      <h1>Shop Page</h1>
      <div className="shop-bg">All Products</div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <Footer />
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.array,
};

export default Shop;
