import React from "react";
import { Link } from "react-router-dom";
const Missing = () => {
  return (
    <div className="text-center">
      <div className="text-2xl text-zinc-500 font-semibold my-5 capitalize"> Page not found</div>
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
};

export default Missing;
