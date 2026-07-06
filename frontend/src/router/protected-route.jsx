import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const auth = null;

  if (auth) return <Outlet />;
  return <Navigate to="/login" />;
};
