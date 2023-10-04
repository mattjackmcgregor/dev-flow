"use client";

import React, { useState, useContext, createContext, useEffect } from "react";

interface IThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  const handleThemeChange = () => {
    if (mode === "dark") {
      // setMode("light");
      document.documentElement.classList.add("light");
    } else {
      // setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
