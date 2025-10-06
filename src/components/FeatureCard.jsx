import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{ rotate: 2.5 }}
      className="h-full w-full bg-[var(--secondary)] p-3 px-4 rounded-md"
    >
      {children}
    </motion.div>
  );
};

export default FeatureCard;
