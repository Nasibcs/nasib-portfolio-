import React, { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load theme from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-zinc-200 bg-white p-2.5 text-zinc-800 shadow-sm transition hover:border-orange-400/35 hover:text-orange-700 dark:border-cyber/30 dark:bg-charcoal-elevated dark:text-cyber dark:hover:border-cyber dark:hover:brightness-110"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <HiOutlineMoon className="h-5 w-5" />
      ) : (
        <HiOutlineSun className="h-5 w-5" />
      )}
    </button>
  );
}
