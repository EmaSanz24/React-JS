import "./NavBar.scss";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="/assets/logo.png" alt="logo Valdeorras" />
      </Link>
      <ul>
        <li>
          <Link to="/">
            <button>Inicio</button>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <button>Productos</button>
          </Link>
        </li>
        <li>
          <Link to="/about-us">
            <button>About Us</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button>Contacto</button>
          </Link>
        </li>
      </ul>
      <div className="cart-widget">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};
export default NavBar;
