import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import productData from "./data/db.json";
import ProductDetail from "./components/ProductDetail";
import { ShopProvider } from "./ShopContext";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home products={productData.products} /> },
        {
          path: "/shop",
          element: <Shop products={productData.products} />,
        },
        ...productData.products.map((product) => ({
          path: `shop/product/${product.id}`,
          element: <ProductDetail product={product} />,
        })),
      ],
    },
  ]);

  return (
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  );
};

export default Router;
