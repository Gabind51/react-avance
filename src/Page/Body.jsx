import { useContext } from "react";
import { DarkThemeContext } from "../DarkThemeContext";

import "./Body.css";

export default function Body() {
  const { darkTheme, toggleDarkTheme } = useContext(DarkThemeContext);

  return (
    <div className={`container ${darkTheme ? "dark" : ""}`}>
      <button className="darkThemeButton" onClick={toggleDarkTheme}>
        {darkTheme ? "Activer le mode clair" : "Activer le mode sombre"}
      </button>
    </div>
  );
}
