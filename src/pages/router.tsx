//packages
import { createBrowserRouter } from "react-router-dom";
import ProductListingPage from "./ProductListingPage";
import ProductDetailsPage from "./ProductDetailsPage";
import ProductPage from "./ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListingPage />,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

export default router;
