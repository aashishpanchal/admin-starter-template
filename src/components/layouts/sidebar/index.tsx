import Text from "@components/ui/text";
import SidebarItem from "./sidebar-item";
import Sidebar from "@components/ui/sidebar";
import { Flex } from "@components/ui/common";
import {
  LuUser as Seller,
  LuMinus as Minus,
  LuLayout as Rules,
  LuTruck as Delivery,
  LuUsers2 as Customer,
  LuSettings as Setting,
  LuChevronFirst as Menu,
  LuShoppingBag as Order,
  LuShoppingCart as Product,
  LuWrench as Configuration,
  LuLayoutDashboard as Dashboard,
} from "react-icons/lu";

type Props = {
  open: boolean;
  toggle: (value?: boolean) => void;
  isTab: boolean;
};

export default function RootSidebar({ open, isTab, toggle }: Props) {
  const onClose = () => toggle();

  return (
    <Sidebar open={open} isTab={isTab} toggle={toggle}>
      <Flex className="justify-between px-4 py-2">
        {/* logo img */}
        <img src="/imgs/logo.png" alt="logo" className="w-28" />
        <Menu
          size={26}
          onClick={onClose}
          className="hidden cursor-pointer md:block"
        />
      </Flex>
      {/* nav bar */}
      <ul className="flex-1 px-2 my-1 space-y-1 overflow-auto">
        <SidebarItem href="/" Icon={Dashboard} text="Dashboard" />
        <Text type="overline" className="px-2 py-1">
          Managements
        </Text>
        <SidebarItem Icon={Product} text="Products">
          <SidebarItem href="products/brand" Icon={Minus} text="Brand" />
          <SidebarItem href="products/category" Icon={Minus} text="Category" />
          <SidebarItem
            Icon={Minus}
            href="products/all-product"
            text="All Products"
          />
          <SidebarItem
            Icon={Minus}
            href="products/attribute"
            text="Attributes"
          />
        </SidebarItem>
        <SidebarItem href="#" Icon={Order} text="Orders" />
        <SidebarItem href="#" Icon={Delivery} text="Delivery Boy" />
        <Text type="overline" className="px-2 py-1">
          Users
        </Text>
        <SidebarItem href="#" Icon={Seller} text="Seller" />
        <SidebarItem href="#" Icon={Customer} text="Customers" />
        <Text type="overline" className="px-2 py-1">
          Configs
        </Text>
        <SidebarItem Icon={Rules} text="Rules & Regulation">
          <SidebarItem href="#" Icon={Minus} text="Terms And Conditions" />
          <SidebarItem href="#" Icon={Minus} text="Private Policy" />
          <SidebarItem href="#" Icon={Minus} text="About Us" />
          <SidebarItem href="#" Icon={Minus} text="FAQ" />
        </SidebarItem>
        <SidebarItem Icon={Setting} text="Settings">
          <SidebarItem href="#" Icon={Minus} text="Payment Method" />
          <SidebarItem href="#" Icon={Minus} text="Currencies" />
        </SidebarItem>
        <SidebarItem Icon={Configuration} text="Configuration">
          <SidebarItem href="#" Icon={Minus} text="Web Config" />
          <SidebarItem href="#" Icon={Minus} text="Mail Config" />
          <SidebarItem href="#" Icon={Minus} text="SMS Config" />
        </SidebarItem>
      </ul>
      {/* footer */}
      <div className="flex p-3 border-t">
        <img
          src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Aashish+Panchal"
          className="w-10 h-10 rounded-md"
        />
        <div className="ml-3 w-52">
          <Text type="subtitle2">Aashish Panchal</Text>
          <Text type="caption">aipanchal51@gmail.com</Text>
        </div>
      </div>
    </Sidebar>
  );
}
