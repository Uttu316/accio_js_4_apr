import { useState } from "react";
import ProductsHeader from "../../components/productsHeader";
import ProductsList from "../../components/productsList";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <ProductsHeader cart={cart} />
      <ProductsList cart={cart} setCart={setCart} />
    </div>
  );
};
export default ProductsPage;
