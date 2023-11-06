import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import RootLayout from "./layouts/RootLayout";

//pages
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import productData from "./data/db.json";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home products={productData.products} /> },
        {
          path: "shop",
          element: <Shop products={productData.products} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
