import { createContext, useState } from "react";

export const DarkThemeContext = createContext(true, []);

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setDarkTheme(() => !darkTheme);
  };

  return <DarkThemeContext.Provider value={{darkTheme, toggleDarkTheme}}>
    {children}
  </DarkThemeContext.Provider>
};
