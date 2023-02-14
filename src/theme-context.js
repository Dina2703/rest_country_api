import { createContext, useState, useEffect } from "react";

const themes = {
  dark: {
    backgroundColor: "var(--dark-mode-el)",
    color: "var(--mode)",
  },
  light: {
    backgroundColor: "var(--light-mode-bg)",
    color: "var(--light-mode-text)",
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false); // Default theme is light

  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
