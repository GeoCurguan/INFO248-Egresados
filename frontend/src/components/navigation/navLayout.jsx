import React from "react";
import Navbar from "@/components/navigation/Navbar";

const NavLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default NavLayout;
