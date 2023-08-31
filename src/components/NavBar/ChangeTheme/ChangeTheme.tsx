import React from "react";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../../../hooks/useTheme";
import { FaSun } from "react-icons/fa";

function ChangeTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
        <FaSun className="cursor-pointer"onClick={() => { setTheme("dark"); }} />
      ) : (
        <FaMoon className={`cursor-pointer ${theme === "dark" ? "text-white": null}`} onClick={() => { setTheme("light"); }} />
      )}
    </div>
  );
}

export default ChangeTheme;
