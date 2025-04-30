import { useContext } from "react";
import styles from "./header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { ProductContext } from "../../context/ProductContext";

const ProductsHeader = () => {
  const { cart } = useContext(ProductContext);
  const cartCount = cart.length;

  return (
    <header className={styles.header}>
      <p className={styles.logo}>Logo</p>
      <p className={styles.cart}>
        <span className={styles.cartCount}>{cartCount}</span>
        <FaShoppingCart />
      </p>
    </header>
  );
};
export default ProductsHeader;
