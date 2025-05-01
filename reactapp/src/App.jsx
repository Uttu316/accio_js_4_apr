import ProductsPage from "./pages/products";
import { BrowserRouter, Route, Routes } from "react-router";
import TimerPage from "./pages/timer";
import CartPage from "./pages/cart";
import NotFoundPage from "./pages/notFound";
import ProductProvider from "./context/ProductContext";
import Product from "./pages/product";
const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
