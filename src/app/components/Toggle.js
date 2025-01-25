"use client";
import { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";

export default function DarkModeToggle({ setTheme, theme }) {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <button className="mt-2 ml-2" onClick={toggleTheme}>
      {theme === "dark" ? (
        <LuSun className="text-white" size={24} />
      ) : (
        <LuMoon size={24} />
      )}
    </button>
  );
}
