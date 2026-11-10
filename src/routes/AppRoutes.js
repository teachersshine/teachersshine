
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/Product/ProductDetails";
import Cart from "../pages/Cart/Cart";
import About from "../pages/About/About";
import Commander from "../pages/Commander/Commander";
import NotFound from "../pages/NotFound/NotFound";
import Contact from "../pages/Contact/Contact";
import Collection from "../pages/Collection/Collection";

import ScrollToTop from "../components/common/ScrollToTop";

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/about" element={<About />} />

          <Route path="/commander" element={<Commander />} />

          <Route path="/collection" element={<Collection />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoutes;
