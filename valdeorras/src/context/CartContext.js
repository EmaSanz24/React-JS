import { createContext, useState } from "react";

const CartContext = createContext();

const ProductsInCart = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartPriceTotal, setCartPriceTotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const clear = () => {
    setCartProducts([]);
    setCartPriceTotal(0);
    setCartTotal(0);
  };

  const deleteProduct = (product) => {
    setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== product.id));
    setCartPriceTotal(cartPriceTotal - product.price * product.quantity);
    setCartTotal(cartTotal - product.quantity);
  };

  const addItem = (product) => {
    let inCart = cartProducts.find((productInCart) => productInCart.id === product.id);
    let total = product.price * product.quantity + cartPriceTotal;
    setCartTotal(product.quantity + cartTotal);

    //console.log(cartProducts)

    if (inCart) {
      setCartPriceTotal(total);
      setCartProducts(
        cartProducts.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, quantity: inCart.quantity + product.quantity };
          }
        })
      );
    } else {
      setCartPriceTotal(total);
      console.log(cartPriceTotal);
      return setCartProducts((cartProducts) => [...cartProducts, product]);
    }
  };
  const data = {
    cartProducts,
    setCartProducts,
    clear,
    addItem,
    cartPriceTotal,
    deleteProduct,
    cartTotal,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default ProductsInCart;
export { CartContext };
