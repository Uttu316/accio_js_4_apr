import { useState } from "react";
import ProductsHeader from "../../components/productsHeader";
import ProductsList from "../../components/productsList";
import ProductProvider from "../../context/ProductContext";

const ProductsPage = () => {
  return (
    <div>
      <ProductsHeader title={"Home"} />
      <ProductsList />
    </div>
  );
};
export default ProductsPage;
