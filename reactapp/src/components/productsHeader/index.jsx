import { useContext } from "react";
import styles from "./header.module.css";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { ProductContext } from "../../context/ProductContext";
import { useLocation, useNavigate } from "react-router";
import { isLoggedIn, logout } from "../../utils/isLoggedIn";

const ProductsHeader = ({ title }) => {
  const { cart } = useContext(ProductContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isUserLoggedIn = isLoggedIn();

  const cartCount = cart.length;

  const isLogin = location.pathname === "/login";

  const isHome = location.pathname === "/";

  const goToHome = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate("/cart");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      <p className={styles.logo}>{title}</p>
      <div className={styles.nav}>
        {!isLogin && (
          <p className={styles.cart} onClick={goToCart}>
            <span className={styles.cartCount}>{cartCount}</span>
            <FaShoppingCart />
          </p>
        )}

        {!isHome && (
          <p className={styles.cart} onClick={goToHome}>
            <FaHome />
          </p>
        )}
        {!isLogin && !isUserLoggedIn && (
          <p className={styles.cart} onClick={goToLogin}>
            Login
          </p>
        )}
        {isUserLoggedIn && (
          <p className={styles.cart} onClick={onLogout}>
            Logout
          </p>
        )}
      </div>
    </header>
  );
};
export default ProductsHeader;
