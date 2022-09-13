import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../FirebaseConfig";

const Products = () => {
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
      console.log("pide a firebase"); //Check de llamado a Firebase
    });
  }, []);

  return (
    <div className="product-cards">
      <h2>Nuestros Productos</h2>
      <div>
        <Link to={`/products/vestimenta`}>Vestimenta</Link>
        <ItemListContainer info={"vestimenta"} data={itemCollection} />
      </div>
      <div>
        <Link to={`/products/calzado`}>Calzado</Link>
        <ItemListContainer info={"calzado"} data={itemCollection} />
      </div>
      <div>
        <Link to={`/products/accesorios`}>Accesorios</Link>
        <ItemListContainer info={"accesorios"} data={itemCollection} />
      </div>
    </div>
  );
};
export default Products;
