import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartProduct = ({ data }) => {
  const { deleteProduct } = useContext(CartContext);
  const { title, image, price, quantity } = data;
  let totalOfProduct = price * quantity;
  return (
    <div className="Cart-Product">
      <img src={`/assets/Products/${image}`} alt="imagen del producto" />
      <h3>{title}</h3>
      <p>cant.: {quantity}</p>
      <span>$ {totalOfProduct}</span>
      <DeleteIcon className="delete" onClick={() => deleteProduct(data)} />
    </div>
  );
};

export default CartProduct;
