// Third party
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

// User Modules
const LoginSignup = lazy(() => import("./LoginSignup/LoginSignup"));
const Login = lazy(() => import("./LoginSignup/Login"));
const Signup = lazy(() => import("./LoginSignup/Signup"));

const Auth = () => {
  return (
    <Routes>
      <Route element={<LoginSignup />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default Auth;
