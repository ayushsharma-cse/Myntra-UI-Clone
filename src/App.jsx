import { Routes, Route } from "react-router-dom";

import HeaderLayout from "./layout/headerLayout";
import Home from "./screens/home/index";
import Products from "./screens/products";
import Carty from "./screens/cart/index";
import Orders from "./screens/orders";
import Wishlist from "./screens/wishlist";

function App() {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path="/" element={<Home></Home>} />
        <Route path="/bag" element={<Carty />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/product" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
