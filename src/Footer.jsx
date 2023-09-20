import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="p-2 bg-blue-400 text-white font-semibold text-center fixed w-full bottom-0">
      Copyright &copy; {date.getFullYear()}
    </footer>
  );
};

export default Footer;
