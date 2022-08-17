import { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import ItemProduct from "../ItemProduct/ItemProduct"; //si se borra pierde los estilos (corregir para la entrega final)
import products from "../../utils/products.mock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({ info }) => {
  const [listProducts, setListProducts] = useState([]);
  const [title, setTitle] = useState();
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    });
  });
  const { category, type } = useParams();

  let catFilt = [];
  let typFilt = [];
  useEffect(() => {
    filterByType();
    typeCheck();
    filterByCategory();
  }, [type, category]);

  const typeCheck = () => {
    typeof type !== "undefined" ? setTitle(type) : setTitle(category);
  };
  const filterByCategory = () => {
    catFilt = [];
    products.map((product) => {
      if (product.category === category) {
        catFilt.push(product);
        setListProducts(catFilt);
      } else if (info === "main") {
        setTitle("Productos Destacados");
        setListProducts(products);
      }
    });
  };
  const filterByType = () => {
    typFilt = [];
    products.map((product) => {
      if (product.type === type) {
        typFilt.push(product);
        setListProducts(typFilt);
      }
    });
  };
  return (
    <div className="list-products">
      <h2>{title}</h2>
      <div className="product-cards">
        <ItemList items={listProducts} />
      </div>
    </div>
  );
};
export default ItemListContainer;
