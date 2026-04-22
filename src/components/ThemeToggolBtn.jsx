"use client";
import { useTheme } from "next-themes";

const ThemeToggolBtn = () => {
    const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
    );
};

export default ThemeToggolBtn;