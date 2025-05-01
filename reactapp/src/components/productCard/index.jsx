import { useCallback, useContext, useMemo } from "react";
import styles from "./card.module.css";
import Card from "../../common/card";
import { ProductContext } from "../../context/ProductContext";

const ProductCard = ({ product }) => {
  const { title, desc, img, brand, price, id } = product;

  const { cart, setCart } = useContext(ProductContext);

  const isInCart = useMemo(() => {
    console.log("Calculating isIncart");
    return cart.find((i) => i.id === id);
  }, [cart, id]);

  console.log("Card Function Runing");

  const addToCart = useCallback(
    (e) => {
      setCart((cart) => [...cart, product]);
      e.preventDefault(); // <-- prevent default action
    },
    [product]
  );

  const removeCart = useCallback(
    (e) => {
      setCart((cart) => {
        let remains = cart.filter((i) => i.id !== id);
        return remains;
      });
      e.preventDefault();
    },
    [id]
  );
  return (
    <Card>
      <img src={img} alt={title} className={styles.img} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.desc}>{desc} </p>
        <p className={styles.price}>Rs.{price}</p>
      </div>
      <div className={styles.btns}>
        {!isInCart && (
          <button onClick={addToCart} className={styles.addToCart}>
            Add to Cart
          </button>
        )}
        {isInCart && (
          <button onClick={removeCart} className={styles.removeCart}>
            Remove from Cart
          </button>
        )}
      </div>
    </Card>
  );
};
export default ProductCard;
