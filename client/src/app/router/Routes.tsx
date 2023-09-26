import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../component/home/HomePage";
import Catalog from "../../component/catalog/Catalog";
import ProductDetail from "../../component/catalog/ProductDetail";
import AboutPage from "../../component/about/AboutPage";
import ContactPage from "../../component/contact/ContactPage";
import NotFound from "../errors/NotFound";
import BasketPage from "../../component/basket/BasketPage";
import CheckOutPage from "../../component/checkout/CheckOutPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetail /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "basket", element: <BasketPage /> },
      { path: "checkout", element: <CheckOutPage /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to="not-found" /> },
    ],
  },
]);
