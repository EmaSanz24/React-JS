import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartTotal, cartProducts } = useContext(CartContext);
  return (
    <div className="cart-widget">
      {cartProducts.length !== 0 && <p>{cartTotal}</p>}
      <ShoppingCartIcon />
    </div>
  );
};

export default CartWidget;
