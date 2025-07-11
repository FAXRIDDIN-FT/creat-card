import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex justify-between p-[20px]">
        <div className="flex items-center">
          <h1 className="text-2xl">Logo</h1>
        </div>
        <div className="gap-[30px] flex items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Products</NavLink>
          <NavLink to="/card">Card</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/user">User</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default React.memo(Header);
