import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
export default function Toggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={() => {
        if (theme === "light") {
          return setTheme("dark");
        }
        return setTheme("light");
      }}
      type="button"
    >
        {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}