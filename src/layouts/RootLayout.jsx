import { NavLink, Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className={isHomePage ? "home-page" : ""}>
        <header>
          <nav>
            <NavLink to="shop">Shop</NavLink>
            <NavLink to="/">Furn</NavLink>

            <div className="header-bag-container">
              <div className="header-bag">Bag</div>
              <div className="header-count">0</div>
            </div>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
