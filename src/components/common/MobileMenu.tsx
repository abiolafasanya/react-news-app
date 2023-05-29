// MobileMenu.js
import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { navbarMenus } from "../../data/links";
import { Action } from "../../types";

const MobileMenu = ({ onClick }: Action) => {
  return (
    <div className="absolute right-0 mt-10 bg-white border rounded shadow-md">
      {navbarMenus.map((menu) => (
        <Link
          key={menu.id}
          to={"#"}
          className="block px-4 py-2"
          onClick={onClick}
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
