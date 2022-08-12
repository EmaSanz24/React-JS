import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";

const ItemDetail = ({ data }) => {
  const { title, image, price, description } = data;
  const [qttSelected, setQttSelected] = useState(0);

  return (
    <div className="Item-Detail">
      <img src={`/assets/Products/${image}`} />
      <div className="Item-Info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <span>${price}</span>
        </div>
        <div>
          {qttSelected > 0 ? (
            <button>
              <Link className="toCart" to="/cart">
                Terminar Compra
              </Link>
            </button>
          ) : (
            <ItemCount setQttSelected={setQttSelected} data={data} initial={1} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
