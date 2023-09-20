import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="flex items-center gap-5">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* <label htmlFor="search" className="mr-4">Search Posts</label> */}
        <input
          id="search"
          placeholder="Search Posts"
          type="text"
          value={search}
          className="px-2 py-1 rounded-sm "
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="list-none flex items-center gap-4">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline " >
          <Link to="/post">Add Post</Link>
        </li>
        <li className="hover:underline " >
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
