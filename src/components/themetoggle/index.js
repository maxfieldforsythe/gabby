import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const THEME_STORAGE_VERSION = "2";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const savedThemeVersion = localStorage.getItem("theme-version");

  if (savedThemeVersion !== THEME_STORAGE_VERSION) {
    if (savedTheme === "dark") return "light";
    if (savedTheme === "light") return "dark";
    return "light";
  }

  return savedTheme === "dark" ? "dark" : "light";
};

const Themetoggle = () => {
  const [theme, settheme] = useState(getInitialTheme);
  const themetoggle = () => {
    settheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    localStorage.setItem("theme-version", THEME_STORAGE_VERSION);
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
