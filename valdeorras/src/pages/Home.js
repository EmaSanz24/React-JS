import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { collection, getDocs } from "firebase/firestore";
import db from "../FirebaseConfig";
import { useEffect, useState } from "react";

const Home = () => {
  const [itemCollection, setItemCollection] = useState([]);
  const [listProducts, setListProducts] = useState([]);

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
  useEffect(() => {
    featuredProducts();
  }, [itemCollection]);

  const featuredProducts = () => {
    itemCollection.map((product) => {
      if (product.id <= 6) {
        setListProducts((listProducts) => [...listProducts, product]);
      }
    });
  };
  return (
    <div className="container">
      <h2>Productos Destacados</h2>
      <ItemListContainer info="home" data={listProducts} />
    </div>
  );
};
export default Home;
