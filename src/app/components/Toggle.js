"use client";
import { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Ensure the client-side rendering is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  } // Avoid hydration mismatch

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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

export default DarkModeToggle;
