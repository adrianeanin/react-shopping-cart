import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero">
        <h1>Home page</h1>
        <div className="hero-description">
          Luxury homeware for people who love timeless design quality
        </div>
        <Link to="/shop" className="hero-btn">
          <button>Shop All</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
