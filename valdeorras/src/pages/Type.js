import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { collection, getDocs } from "firebase/firestore";
import db from "../FirebaseConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const Type = () => {
  const [itemCollection, setItemCollection] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const { category, type } = useParams();
  const [title, setTitle] = useState("");

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
      console.log("pide a firebase"); //Check de llamado a Firebase
    });
  }, []);
  let typFilt = [];
  useEffect(() => {
    typeCheck();
    filterByType();
  }, [type, category, itemCollection]);

  const typeCheck = () => {
    typeof type !== "undefined" ? setTitle(type) : setTitle(category);
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
    <div className="container">
      <Navigation />
      <h2>{title}</h2>
      <ItemListContainer info="type" data={listProducts} />
    </div>
  );
};
export default Type;
