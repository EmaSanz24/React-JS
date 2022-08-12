import { createContext, useState } from "react";

const CartContext = createContext();

const ProductsInCart = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const clear = () => {
    setCartProducts([]);
  };

  const addItem = (product) => {
    let inCart = cartProducts.find((productInCart) => productInCart.id === product.id);
    //console.log(cartProducts)
    
    if (inCart) {
        setCartProducts(
            cartProducts.map((productInCart) => {
                if(productInCart.id === product.id) {
                    return (
                        {...inCart, quantity: inCart.quantity + product.quantity}
                        )
                }
            })
        )             
    } else {
        return (setCartProducts(cartProducts => [...cartProducts, product]));
    }
  };
  const data = {
    cartProducts,
    setCartProducts,
    clear,
    addItem,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default ProductsInCart;
export { CartContext };
