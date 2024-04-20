// Third party
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// User Modules
const LoginSignup = lazy(() => import("./LoginSignup/LoginSignup"));
const Login = lazy(() => import("./LoginSignup/Login"));
const Signup = lazy(() => import("./LoginSignup/Signup"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const VerifyEmail = lazy(() => import("./VerifyEmail"));

const Auth = () => {
  return (
    <Routes>
      <Route element={<LoginSignup />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/verify" element={<VerifyEmail />} />
    </Routes>
  );
};

export default Auth;
