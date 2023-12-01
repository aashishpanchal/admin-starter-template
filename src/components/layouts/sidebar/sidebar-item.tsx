import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { LuChevronDown as ChevronDown } from "react-icons/lu";

type Props = React.PropsWithChildren<{
  Icon?: any;
  text: string;
  alert?: React.ReactNode;
  href?: string;
}>;

export default function SidebarItem({
  Icon,
  text,
  alert,
  href,
  children,
}: Props) {
  if (!children)
    return (
      <li className="list-none cursor-pointer">
        <NavLink
          to={href || "#"}
          className="flex items-center gap-4 p-2 text-sm font-medium transition-colors duration-300 ease-in-out rounded-md hover:bg-primary/10 hover:text-primary text-zinc-950"
        >
          {Icon && <Icon size={20} />}
          <span className="truncate">{text}</span>
          {alert}
        </NavLink>
      </li>
    );

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <li
        className="overflow-hidden list-none cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4 p-2 text-sm font-medium hover:text-primary">
          <span>{Icon && <Icon size={20} />}</span>
          <div className="flex justify-between w-full">
            <span className="truncate">{text}</span>
            <span className="flex items-center gap-1">
              <ChevronDown
                className={`${open && "rotate-180"} duration-200`}
                size={20}
              />
              {alert}
            </span>
          </div>
        </div>
      </li>
      <motion.ul
        initial={{ height: 0 }}
        animate={open ? { height: "fit-content" } : { height: 0 }}
        transition={{ duration: 0.1 }}
        className="flex flex-col overflow-hidden ml-7"
      >
        {children}
      </motion.ul>
    </>
  );
}
