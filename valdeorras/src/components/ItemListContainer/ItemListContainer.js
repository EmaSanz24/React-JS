import { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ info, data }) => {
  const [listProducts, setListProducts] = useState([]);

  let filt = [];

  useEffect(() => {
    validating();
  }, [data]);

  const validating = () => {
    if (info == "type" || info == "home") {
      setListProducts(data);
    } else filtering();
  };
  const filtering = () => {
    filt = [];
    data.map((product) => {
      if (product.category == info) {
        filt.push(product);
        setListProducts(filt);
      } else if (product.type == info) {
        filt.push(product);
        setListProducts(filt);
      }
    });
  };

  return (
    <div className="list-products">
      <div className="product-cards">
        <ItemList items={listProducts} />
      </div>
    </div>
  );
};
export default ItemListContainer;
