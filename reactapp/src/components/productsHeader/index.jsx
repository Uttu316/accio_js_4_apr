import { useContext } from "react";
import styles from "./header.module.css";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { ProductContext } from "../../context/ProductContext";
import { useLocation, useNavigate } from "react-router";

const ProductsHeader = ({ title }) => {
  const { cart } = useContext(ProductContext);
  const location = useLocation();
  const navigate = useNavigate();
  const cartCount = cart.length;

  const isCart = location.pathname.includes("/cart");
  const isHome = !isCart;

  const goToHome = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <header className={styles.header}>
      <p className={styles.logo}>{title}</p>
      {isHome && (
        <p className={styles.cart} onClick={goToCart}>
          <span className={styles.cartCount}>{cartCount}</span>
          <FaShoppingCart />
        </p>
      )}
      {isCart && (
        <p className={styles.cart} onClick={goToHome}>
          <FaHome />
        </p>
      )}
    </header>
  );
};
export default ProductsHeader;
