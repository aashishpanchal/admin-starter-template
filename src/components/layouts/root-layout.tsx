import React from "react";
import { useAppSelector } from "@app/hooks";
import { useMediaQuery } from "react-responsive";
import { Navigate, Outlet } from "react-router-dom";
import RootHeader from "./header";
import RootSidebar from "./sidebar";

export default function RootLayout() {
  // user have permission to access
  const user = useAppSelector((state) => state.auth);
  // layout start
  const isTab = useMediaQuery({ query: "(max-width: 768px)" });

  const [open, setOpen] = React.useState<boolean>(isTab ? true : false);

  const toggle = (value = !open) => setOpen(value);

  // open sidebar according to device
  React.useEffect(() => {
    // "mobile"
    if (isTab) toggle(true);
    // "system"
    else toggle(false);
  }, [isTab]);

  if (!user.auth) return <Navigate to="/login" replace />;

  return (
    <div className="flex">
      <RootSidebar open={open} toggle={toggle} isTab={isTab} />
      <section className="flex flex-col flex-auto h-screen">
        <RootHeader open={open} toggle={toggle} />
        <main className="w-full h-full bg-gray-50">
          <Outlet />
        </main>
      </section>
    </div>
  );
}
