import { useEffect, useState } from "react";
import { PRODUCT_DATA } from "../../data/productsData";
import ProductCard from "../productCard";
import styles from "./list.module.css";
import { getProducts } from "../../services/products/getProducts";

const ProductsList = ({ setCart, cart }) => {
  const [list, setlist] = useState([]);
  const [status, setStatus] = useState("loading");

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const isEmpty = isDone && list.length === 0;
  const hasData = isDone && list.length > 0;

  const fetchProducts = async () => {
    setStatus("loading");
    try {
      const data = await getProducts();
      setlist(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
      //show error
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className={styles.listContainer}>
      <p className={styles.listTitle}>Latest Products</p>
      {hasData && (
        <div className={styles.list}>
          {list.map((item) => (
            <ProductCard
              cart={cart}
              setCart={setCart}
              key={item.id}
              product={item}
            />
          ))}
        </div>
      )}
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Something Went Wrong</h3>}
      {isEmpty && <h3>No Product Available </h3>}
    </div>
  );
};
export default ProductsList;
