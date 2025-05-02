import { Navigate, Outlet } from "react-router";
import { isLoggedIn } from "../utils/isLoggedIn";

const ProtectedRoute = () => {
  const isLogIn = isLoggedIn();
  if (!isLogIn) {
    return <Outlet />; // current path
  }

  return <Navigate to="/" replace={true} />;
};
export default ProtectedRoute;
