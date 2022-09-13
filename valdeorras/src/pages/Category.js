import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { collection, getDocs } from "firebase/firestore";
import db from "../FirebaseConfig";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const Category = () => {
  const [itemCollection, setItemCollection] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const { category, type } = useParams();
  const [title, setTitle] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");

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
  let catFilt = [];
  useEffect(() => {
    typeFilter();
    typeCheck();
    filterByCategory();
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
      }
    });
  };
  const typeFilter = () => {
    if (category == "vestimenta") {
      setType1("remeras");
      setType2("abrigos");
    } else if (category == "calzado") {
      setType1("casual");
      setType2("deportivo");
    } else if (category == "accesorios") {
      setType1("gorros");
      setType2("mochilas");
    }
  };

  return (
    <div className="container">
      <Navigation />
      <h2>{title}</h2>
      <div className="product-cards">
        <Link to={`/products/${category}/${type1}`}>{type1}</Link>
        <ItemListContainer info={type1} data={listProducts} />
      </div>
      <div className="product-cards">
        <Link to={`/products/${category}/${type2}`}>{type2}</Link>
        <ItemListContainer info={type2} data={listProducts} />
      </div>
    </div>
  );
};
export default Category;
