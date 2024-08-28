"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { setCookie } from "cookies-next";
import { useListenToSystemTheme } from "@/hooks/useSystemTheme";

export type Theme = "light" | "dark" | "system";

export type UsingSystemTheme = "true" | "false";

type ThemeContextProps = {
  theme: Theme;
  usingSystemTheme?: UsingSystemTheme;
  setTheme: (newTheme: Theme) => void;
  setUsingSystemTheme: (value: UsingSystemTheme) => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme: Theme;
  initialUsingSystemTheme?: UsingSystemTheme;
}

export function ThemeProvider({
  children,
  initialTheme,
  initialUsingSystemTheme,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const [usingSystemTheme, setUsingSystemThemeState] = useState<
    UsingSystemTheme | undefined
  >(initialUsingSystemTheme);

  // Apply the new theme
  function setTheme(value: Theme) {
    setThemeState(value);
    setCookie("theme", value, { path: "/", maxAge: 7 * 24 * 60 * 60 });
    document.documentElement.setAttribute("data-theme", value);
  }

  function setUsingSystemTheme(value: UsingSystemTheme | undefined) {
    setUsingSystemThemeState(value);
    setCookie("using-system-theme", value, {
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });
  }

  useListenToSystemTheme({ setTheme });

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, usingSystemTheme, setUsingSystemTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
