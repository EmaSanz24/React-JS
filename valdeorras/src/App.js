import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import ProductsInCart from "./context/CartContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <ProductsInCart>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Home />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/products/:category/:type" element={<Category />} />
          <Route path="/products/:category/:type/:Id" element={<Detail />} />
          <Route path="/about-us" element={<h1>futuro about us</h1>} />
          <Route path="/contact" element={<h1>futuro contact</h1>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>ERROR 404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ProductsInCart>
  );
}

export default App;
