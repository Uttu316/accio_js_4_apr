import ProductsPage from "./pages/products";
import { BrowserRouter, Route, Routes } from "react-router";
import TimerPage from "./pages/timer";
import CartPage from "./pages/cart";
import NotFoundPage from "./pages/notFound";
import ProductProvider from "./context/ProductContext";
import Product from "./pages/product";
import Login from "./pages/login";
import Signup from "./pages/signup";
import PrivateRoute from "./routes/privateRoute";
import ProtectedRoute from "./routes/protectedRoute";
const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<Product />} />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/timer" element={<TimerPage />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
