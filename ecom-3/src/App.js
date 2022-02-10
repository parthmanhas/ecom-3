import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "component/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Shop from "pages/shop/Shop";
import ProductDetail from "./pages/itemDetail/ItemDetail";
import Cart from "component/cart/Cart";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="item-detail-view" element={<ProductDetail />} />
      </Routes>
      <Cart />
    </div>
  );
};

export default App;
