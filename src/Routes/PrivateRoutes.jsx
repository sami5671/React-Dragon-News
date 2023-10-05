import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  // destructure
  const { user, loading } = useContext(AuthContext);

  //   for getting the location where user have clicked or want to navigate
  const location = useLocation();
  console.log(location.pathname);

  //   if the website load the spinner will show
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  //   check the user is logged in or not(if logged in then it will permission to go on the destination route)
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
