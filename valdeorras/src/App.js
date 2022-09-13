import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import ProductsInCart from "./context/CartContext";
import Cart from "./pages/Cart";
import Type from "./pages/Type";
import AboutUs from "./pages/About-Us";
import Contact from "./pages/Contact";

function App() {
  return (
    <ProductsInCart>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/products/:category/:type" element={<Type />} />
          <Route path="/products/:category/:type/:Id" element={<Detail />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>ERROR 404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ProductsInCart>
  );
}

export default App;
