import React from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      className="w-full md:w-fit block mx-auto shadow-lg bg-gradient-to-b from-stone-700 to-stone-800 p-2 px-4 rounded-md lg:text-xl font-medium hover:text-[var(--primary)]"
      {...props}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
