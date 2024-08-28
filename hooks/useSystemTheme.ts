import { Theme } from "@/context/theme-provider";
import { useEffect } from "react";

interface Props {
  setTheme: (theme: Theme) => void;
}

/**
 * Listen for changes in the system theme preference (e.g. when the user
 * changes their computer's theme in settings) and then update the app's theme
 * to match it.
 * @param props {setTheme: (theme: Theme) => void}
 */
export function useListenToSystemTheme(props: Props) {
  // Listen for changes in system theme preference
  useEffect(() => {
    // System theme preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Handle the event of a user changing the system theme
    function handler(e: MediaQueryListEvent) {
      console.log("System theme changed", e.matches);
      const newTheme = e.matches ? "dark" : "light";
      props.setTheme(newTheme);
    }

    // Change theme when user changes system theme
    systemPrefersDark.addEventListener("change", (e) => handler(e));

    // Cleanup
    return () => {
      systemPrefersDark.removeEventListener("change", (e) => handler(e));
    };
  }, [props]);
}
