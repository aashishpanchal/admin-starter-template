import { routers } from "./router";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RouterProvider router={routers} />
      <ToastContainer className="text-sm" />
    </>
  );
}

export default App;
