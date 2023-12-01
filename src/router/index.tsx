import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Auth from "./auth";
import Admin from "./admin";

export const routers = createBrowserRouter(
  createRoutesFromElements([Admin, Auth])
);
