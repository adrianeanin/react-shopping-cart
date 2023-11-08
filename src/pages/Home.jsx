import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-description">
          Luxury homeware for people who love timeless design quality
        </div>
        <Link to="/shop">
          <button className="hero-btn">Shop All</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
