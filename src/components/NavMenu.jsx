import React from "react";
import { motion } from "framer-motion";

const NavMenu = ({ setIsMenuOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsMenuOpen(false)}
      className="fixed z-50 top-0 left-0 h-screen w-screen flex justify-center items-center backdrop-blur-md bg-[rgba(40,40,40,0.75)]"
    >
      NavMenu
    </motion.div>
  );
};

export default NavMenu;
