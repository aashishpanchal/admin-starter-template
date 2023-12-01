import { useAppSelector } from "@app/hooks";
import { Navigate, Outlet } from "react-router-dom";

type Props = {};

export default function AuthLayout({}: Props) {
  const user = useAppSelector((state) => state.auth);

  if (user.auth) return <Navigate to="/" replace />;

  return (
    <main className="grid h-screen bg-cover place-items-center bg-login-img w-100">
      <Outlet />
    </main>
  );
}
