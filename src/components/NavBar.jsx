import React from "react";
import logo from "../assets/logo.png";
import { MdLightMode } from "react-icons/md";

function NavBar() {
  return (
    <div className="h-15 w-full shadow-sm flex justify-between items-center py-6 px-12">
      <div className="flex gap-1 items-center">
        <img src={logo} alt="Logo" width={50} />
        <h1 className="text-xl">Budget Tracker</h1>
      </div>

      <div className="flex items-center gap-10">
        <div className="cursor-pointer">
          <MdLightMode size={24} />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" className="hover:text-[#DC7633]">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
