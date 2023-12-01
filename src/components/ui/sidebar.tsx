import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useLocation } from "react-router-dom";

type Props = {
  open?: boolean;
  isTab?: boolean;
  toggle: (value?: boolean) => void;
  children?: React.ReactNode;
};

export default function Sidebar({ open, toggle, isTab, children }: Props) {
  const { pathname } = useLocation();

  const animation = {
    // "system view"
    open: {
      x: 0,
      width: "15rem",
      transition: { damping: 10, duration: 0.15 },
    },
    closed: {
      x: -250,
      width: 0,
      transition: { damping: 10, duration: 0.15 },
    },
  };

  // auto hidden change path on mobile screen
  React.useEffect(() => {
    if (isTab) toggle();
  }, [pathname]);

  return (
    <aside>
      <div
        className={twMerge(
          "md:hidden max-h-screen fixed inset-0 bg-black/50 z-50 backdrop-blur-md transition-colors duration-300 ease-out cursor-pointer",
          open
            ? "bg-transparent backdrop-blur-none pointer-events-none"
            : "block"
        )}
        onClick={() => toggle()}
      ></div>
      <motion.div
        variants={animation}
        animate={open ? "closed" : "open"}
        initial={{ x: isTab ? -250 : 0 }}
        className="fixed z-50 flex flex-col h-screen overflow-hidden bg-white border-r w-60 max-w-fit border-zinc-300/25 md:relative"
      >
        {children}
      </motion.div>
    </aside>
  );
}
