import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4, WiDaySunny } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="nav_ac" onClick={toggleTheme} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
      {theme === "light" ? <WiDaySunny /> : null}
      {theme === "dark" ? <WiMoonAltWaningCrescent4 /> : null}
    </div>
  );
};

export default Themetoggle;
