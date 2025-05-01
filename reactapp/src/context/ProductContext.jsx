import { createContext, useState } from "react";

export const ProductContext = createContext({ cart: [] });

const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log({ cart });
  return (
    <ProductContext.Provider value={{ cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
