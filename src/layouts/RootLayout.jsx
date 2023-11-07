import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className={isHomePage ? "home-page" : ""}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
