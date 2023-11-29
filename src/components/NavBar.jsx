import React, { useContext, useEffect } from "react";
import logo from "../assets/logo.png";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { AppContext } from "../context/AppContext";

function NavBar() {
  const { theme, setTheme } = useContext(AppContext);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-15 w-full shadow-sm dark:shadow-md flex justify-between items-center py-6 px-12">
      <div className="flex gap-1 items-center">
        <img src={logo} alt="Logo" width={50} />
        <h1 className="text-xl">Budget Tracker</h1>
      </div>

      <div className="flex items-center gap-10">
        <div className="cursor-pointer">
          {theme === "dark" ? (
            <MdLightMode size={24} onClick={handleThemeToggle} />
          ) : (
            <MdDarkMode size={24} onClick={handleThemeToggle} />
          )}
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
