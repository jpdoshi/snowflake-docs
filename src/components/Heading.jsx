import React from "react";

const Heading = ({ children }) => {
  return (
    <h2 className="text-center font-bold text-2xl lg:text-3xl text-[var(--yellow)] underline underline-offset-4 mb-8">
      {children}
    </h2>
  );
};

export default Heading;
