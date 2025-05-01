import { useCallback, useEffect, useRef, useState } from "react";
import { PRODUCT_DATA } from "../../data/productsData";
import ProductCard from "../productCard";
import styles from "./list.module.css";
import { getProducts } from "../../services/products/getProducts";
import { useAPIStatus } from "../../hooks/useAPIStatus";
import { Link } from "react-router";

const ProductsList = () => {
  const [list, setlist] = useState([]);
  const { setStatus, isDone, isLoading, isError } = useAPIStatus();
  const pRef = useRef();

  const reRender = useRef(0);

  reRender.current = reRender.current + 1;

  const isEmpty = isDone && list.length === 0;
  const hasData = isDone && list.length > 0;

  const ErrorMessage = useCallback(() => <h3>Something Went Wrong</h3>, []);

  const fetchProducts = useCallback(async () => {
    setStatus("loading");
    try {
      const data = await getProducts();
      setlist(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
      //show error
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(reRender);

  return (
    <div className={styles.listContainer}>
      <p ref={pRef} className={styles.listTitle}>
        Latest Products
      </p>

      {hasData && (
        <div className={styles.list}>
          {list.map((item) => (
            <Link to={`/product/${item.id}`}>
              <ProductCard key={item.id} product={item} />
            </Link>
          ))}
        </div>
      )}
      {isLoading && <h3>Loading...</h3>}
      {isError && <ErrorMessage />}
      {isEmpty && <h3>No Product Available </h3>}
    </div>
  );
};
export default ProductsList;
