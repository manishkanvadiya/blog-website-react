import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="p-1 bg-blue-400 text-center fixed w-full bottom-0">
      {date.getFullYear()}
    </footer>
  );
};

export default Footer;
