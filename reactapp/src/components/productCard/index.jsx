import styles from "./card.module.css";

const ProductCard = ({ product, cart, setCart }) => {
  const { title, desc, img, brand, price, id } = product;

  const isInCart = cart.find((i) => i.id === id);

  const addToCart = () => {
    setCart((cart) => [...cart, product]);
  };
  const removeCart = () => {
    setCart((cart) => {
      let remains = cart.filter((i) => i.id !== id);
      return remains;
    });
  };
  return (
    <div className={styles.card}>
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
    </div>
  );
};
export default ProductCard;
