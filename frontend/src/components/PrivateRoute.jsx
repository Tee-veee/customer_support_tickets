// ROUTER
import { Navigate, Outlet } from "react-router-dom";
// HOOKS
import { useAuthStatus } from "../hooks/useAuthStatus";
// COMPONENTS
import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { loggedIn, isLoading } = useAuthStatus();

  if (isLoading) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
