import { Route } from "react-router-dom";
// layouts
import RootLayout from "@components/layouts/root-layout";
// pages
import Home from "@pages/home";
import Brand from "@pages/products/brand";
import Category from "@pages/products/category";
import AllProduct from "@/pages/products/all-product";
import Attribute from "@/pages/products/attribute";

const Admin = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    {/* products routes  */}
    <Route path="products/brand" element={<Brand />} />
    <Route path="products/category" element={<Category />} />
    <Route path="products/all-product" element={<AllProduct />} />
    <Route path="products/attribute" element={<Attribute />} />
  </Route>
);

export default Admin;
