import CartProduct from "../CartProduct/CartProduct";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartProductList = ({ products }) => {
  const { cartPriceTotal, clear } = useContext(CartContext);
  return (
    <div className="Cart-Product-List">
      <h1>Carrito de compras</h1>
      {products.map((product) => {
        return <CartProduct key={product.id} data={product} />;
      })}
      <div className="total">
        {cartPriceTotal === 0 ? (
          <h2>
            Opps parece que no tienes nada en tu carrito de compras, haz <Link to="/">click aqui</Link> para comprar
          </h2>
        ) : (
          <div>
            <p>TOTAL: ${cartPriceTotal}</p>
            <button onClick={clear}>Borrar Todo</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProductList;
