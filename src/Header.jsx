import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <Link to="/" className="font-bold text-2xl">
      {title}
    </Link>
  );
};

export default Header;
