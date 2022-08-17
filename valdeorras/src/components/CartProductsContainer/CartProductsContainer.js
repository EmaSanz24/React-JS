import CartProductList from "../CartProductsList/CartProductsList";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartProductsContainer.scss";

const CartProductsContainer = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <div className="Cart-Products-Container">
      <CartProductList products={cartProducts} />
    </div>
  );
};

export default CartProductsContainer;
