"use client";

import PrimaryBtn from "./primary-btn";
import { Theme, useTheme } from "@/context/theme-provider";

type Props = {
  theme: Theme;
  icon: React.ReactNode;
};

export function ThemeBtn(props: Props) {
  const { theme, setTheme, usingSystemTheme, setUsingSystemTheme } = useTheme();

  /**
   * ThemeBtn represents a theme. When clicked, apply its theme
   * and set whether or not the selected theme also is the system preference.
   */
  function handleClick() {
    switch (props.theme) {
      case "light":
        setTheme("light");
        setUsingSystemTheme("false");
        break;
      case "dark":
        setTheme("dark");
        setUsingSystemTheme("false");
        break;
      case "system":
        const systemIsDark =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        const sysTheme = systemIsDark ? "dark" : "light";
        setTheme(sysTheme);
        setUsingSystemTheme("true");
        break;

      default:
        throw new Error("props.theme is not a valid theme type");
    }
  }

  /**
   * Determine if the theme of the app matches the theme this button represents.
   * Use this to add content to the button to show that it's theme is active.
   * @returns string | null
   */
  function inUse(): string | null {
    switch (theme) {
      case "light":
        return usingSystemTheme === "false" && props.theme === "light"
          ? "In Use"
          : usingSystemTheme === "true" && props.theme === "system"
            ? "In Use"
            : null;
      case "dark":
        return usingSystemTheme === "false" && props.theme === "dark"
          ? "In Use"
          : usingSystemTheme === "true" && props.theme === "system"
            ? "In Use"
            : null;
      case "system":
        return usingSystemTheme === "true" ? "In Use" : null;
      default:
        throw new Error("theme is not a valid theme type");
    }
  }

  return (
    <PrimaryBtn onClick={handleClick}>
      {props.icon}
      {inUse()}
    </PrimaryBtn>
  );
}
