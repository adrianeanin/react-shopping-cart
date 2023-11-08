import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className={isHomePage ? "home-active" : "home"}>
        <Header />
        <main className={isHomePage ? "main-active" : ""}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
