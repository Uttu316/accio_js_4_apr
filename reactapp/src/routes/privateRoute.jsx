import { Navigate, Outlet } from "react-router";
import { isLoggedIn } from "../utils/isLoggedIn";

const PrivateRoute = () => {
  const isLogIn = isLoggedIn();
  if (isLogIn) {
    return <Outlet />; // current path
  }

  return <Navigate to="/login" replace={true} />;
};
export default PrivateRoute;
