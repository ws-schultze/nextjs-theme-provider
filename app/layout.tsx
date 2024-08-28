import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/theme.css";
import {
  Theme,
  ThemeProvider,
  UsingSystemTheme,
} from "@/context/theme-provider";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theme Toggler Template",
  description:
    "With potentially going against the best practices of Next, this template provides one approach to solving the FOUC issues that arise with trying to implement custom dynamic themes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();

  const theme = cookieStore.get("theme")?.value || "dark";

  const usingSystemTheme =
    cookieStore.get("using-system-theme")?.value || "true";

  console.log("Theme at root: ", theme);
  console.log("System theme at root: ", usingSystemTheme);

  return (
    <html
      lang="en"
      data-theme={theme}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                function getCookie(name) {
                  
                  const value = \`;\${document.cookie}\`;
                  
                  const parts = value.split(\`;\${name}=\`);
                  
                  if (parts.length === 2) return parts.pop().split(';').shift();
                }

                function setTheme() {

                  let theme = getCookie("theme");

                  let usingSystemTheme = getCookie("using-system-theme")

                  const prefersDarkMode = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                  ).matches;

                  theme = prefersDarkMode ? "dark" : "light";

                  // No theme and no system theme have been set to cookies yet
                  if (theme !== "light" && theme !== "dark"){
                      document.cookie = \`theme=\${theme}; path=/;\`;
                      document.cookie = \`using-system-theme=\${"true"}; path=/;\`;
                    }

                }

                setTheme();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-bodyBgGradient text-colorText1`}>
        <ThemeProvider
          initialTheme={theme as Theme}
          initialUsingSystemTheme={usingSystemTheme as UsingSystemTheme}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
