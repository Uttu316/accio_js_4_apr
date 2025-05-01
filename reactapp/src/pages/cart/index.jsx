import { useContext } from "react";
import ProductsHeader from "../../components/productsHeader";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../../components/productCard";

const CartPage = () => {
  const { cart } = useContext(ProductContext);

  return (
    <div>
      <ProductsHeader title="Cart" />

      <h2>Cart Products</h2>

      {cart.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
      {!cart.length && <h3>Cart is Empty</h3>}
    </div>
  );
};
export default CartPage;
