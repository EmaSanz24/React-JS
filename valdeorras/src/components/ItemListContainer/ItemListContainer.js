import { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import ItemProduct from "../ItemProduct/ItemProduct"; //si se borra pierde los estilos (corregir para la entrega final)
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../FirebaseConfig";

const ItemListContainer = ({ info }) => {
  const [listProducts, setListProducts] = useState([]);
  const [title, setTitle] = useState();
  const { category, type } = useParams();
  const [itemCollection, setItemCollection] = useState([]);

  const getProducts = async () => {
    const productsData = collection(db, "products");
    const productSnapshot = await getDocs(productsData);
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productList;
  };
  useEffect(() => {
    getProducts().then((res) => {
      setItemCollection(res);
      console.log("pide a firebase");
    });
  }, []);
  let catFilt = [];
  let typFilt = [];
  useEffect(() => {
    typeCheck();
    filterByCategory();
    filterByType();
  }, [type, category, itemCollection]);

  const typeCheck = () => {
    typeof type !== "undefined" ? setTitle(type) : setTitle(category);
  };

  const filterByCategory = () => {
    catFilt = [];
    itemCollection.map((product) => {
      if (product.category === category) {
        catFilt.push(product);
        setListProducts(catFilt);
      } else if (info === "main") {
        setTitle("Productos Destacados");

        setListProducts(itemCollection);
      }
    });
  };

  const filterByType = () => {
    typFilt = [];
    itemCollection.map((product) => {
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
