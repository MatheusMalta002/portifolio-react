import React from "react";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../../../hooks/useTheme";
import { FaSun } from "react-icons/fa";

function ChangeTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
        <FaSun onClick={() => { setTheme("dark"); }} />
      ) : (
        <FaMoon className={`${theme === "dark" ? "text-gray-400": null}`} onClick={() => { setTheme("light"); }} />
      )}
    </div>
  );
}

export default ChangeTheme;
