import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../services/products/getproduct";
import { useAPIStatus } from "../../hooks/useAPIStatus";
import ProductsHeader from "../../components/productsHeader";
import ProductCard from "../../components/productCard";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { isDone, isError, isLoading, setStatus } = useAPIStatus();

  const errorMessage = useRef("");

  const noData = isDone && !product;
  const hasData = isDone && !!product;

  const fetchProduct = async () => {
    try {
      const data = await getProduct(productId);
      setProduct(data);
      setStatus("done");
    } catch (e) {
      if (e.status === 404) {
        errorMessage.current = "Product Not Available";
      }
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log({ errorMessage });

  return (
    <div>
      <ProductsHeader title={"Product"} />

      {isLoading && <h2>Loading...</h2>}

      {hasData && (
        <div>
          <ProductCard product={product} />
        </div>
      )}
      {!!(noData || errorMessage.current) && (
        <h2>{errorMessage.current || "Product not Available"}</h2>
      )}
      {isError && !errorMessage.current && <h2>Something Went Wrong</h2>}
    </div>
  );
};

export default Product;
