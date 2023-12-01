import { Route } from "react-router-dom";
// layouts
import AuthLayout from "@components/layouts/auth-layout";
// pages
import Login from "@pages/login";
import ForgotPassword from "@pages/forgot-password";

const Auth = (
  <Route path="/" element={<AuthLayout />}>
    <Route index path="login" element={<Login />} />
    <Route index path="forgot-password" element={<ForgotPassword />} />
  </Route>
);

export default Auth;
