import { useEffect, useState } from "react";
import { ThemeContext } from "./theme";
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* Works without storage. */
    }
  }, [isDark]);
  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme: () => setIsDark((previous) => !previous) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
