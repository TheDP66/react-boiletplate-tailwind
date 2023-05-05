import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ props }) => {
  // const firstLogin = localStorage.getItem("firstLogin");
  const firstLogin = true;

  return firstLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
