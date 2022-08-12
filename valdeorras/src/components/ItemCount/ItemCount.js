import "./ItemCount.scss";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ data, initial, setQttSelected }) => {
  const { addItem } = useContext(CartContext);
  const { stock } = data;
  const [count, setCount] = useState(initial);

  const addQtt = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const remQtt = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const onAdd = () => {
    let ProductInfoToCart = data;
    ProductInfoToCart["quantity"] = count;
    addItem(ProductInfoToCart);
    setQttSelected(count);
  };
  return (
    <>
      <div className="contador">
        <button onClick={remQtt}>-</button>
        <span>{count}</span>
        <button onClick={addQtt}>+</button>
      </div>
      <button className="addOnCart" onClick={onAdd}>
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
