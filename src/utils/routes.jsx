// PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/redux/reducer/authReducerSlice";

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};