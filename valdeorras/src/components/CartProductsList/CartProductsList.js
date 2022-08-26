import CartProduct from "../CartProduct/CartProduct";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import Modal from "../Modal/Modal";
import db from "../../FirebaseConfig";

const CartProductList = ({ products }) => {
  const { cartPriceTotal, clear, cartProducts } = useContext(CartContext);
  const [success, setSuccess] = useState();
  const [showModal, setShowModal] = useState(false);
  console.log(cartProducts);

  const [order, setOrder] = useState({
    items: cartProducts.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
      };
    }),
    buyer: {},
    date: new Date().toLocaleString(),
    total: cartPriceTotal,
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const change = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitData = (e) => {
    e.preventDefault();
    pushData({ ...order, buyer: formData });
  };
  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, "orders");
    const orderDoc = await addDoc(collectionOrder, newOrder);
    setSuccess(orderDoc.id);
  };
  return (
    <div className="Cart-Product-List">
      <h1>Carrito de compras</h1>
      {products.map((product) => {
        return <CartProduct key={product.id} data={product} />;
      })}
      <div className="total">
        {cartPriceTotal === 0 ? (
          <h2>
            Opps parece que no tienes nada en tu carrito de compras, haz <Link to="/">click aqui</Link> para comprar
          </h2>
        ) : (
          <div>
            <p>TOTAL: ${cartPriceTotal}</p>
            <button onClick={clear}>Borrar Todo</button>
            <button onClick={() => setShowModal(true)}>Comprar</button>
          </div>
        )}
      </div>
      {showModal && (
        <Modal title="Formulario de envio" close={() => setShowModal()}>
          {success ? (
            <>
              <h2>Felicidades su compra fue realizada correctamente</h2>
              <span> ID de Compra: {success}</span>
            </>
          ) : (
            <form onSubmit={submitData}>
              <p>Nombre:</p>
              <input type="text" name="name" placerholder="Ingrese Su Nombre" onChange={change} value={formData.name} />
              <p>Telefono:</p>
              <input
                type="number"
                name="phone"
                placerholder="Ingrese Su Telefono"
                onChange={change}
                value={formData.phone}
              />
              <p>Email</p>
              <input
                type="email"
                name="email"
                placerholder="Ingrese Su Email"
                onChange={change}
                value={formData.email}
              />
              <button type="submit">ENVIAR</button>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
};

export default CartProductList;
