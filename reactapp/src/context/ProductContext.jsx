import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <ProductContext.Provider value={{ cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
