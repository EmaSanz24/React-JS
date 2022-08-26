import ItemDetail from "../ItemDetail/ItemDetail";
//import products from '../../utils/products.mock'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../FirebaseConfig";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const { Id } = useParams();
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

  useEffect(() => {
    filterById(Id);
  }, [Id, itemCollection]);

  const filterById = (id) => {
    itemCollection.some((product) => {
      if (product.id == id) {
        setProductDetail(product);
      }
    });
  };
  return (
    <div>
      <ItemDetail data={productDetail} />
    </div>
  );
};

export default ItemDetailContainer;
