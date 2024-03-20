import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { themes } from "../theme/themeColor";
import { createTheme } from "@mui/material";
import { colorTheme } from "src/theme/palette";
import { typography } from "src/theme/typography";
import { components } from "src/theme/components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

type ThemeContextType = [keyof typeof themes, Dispatch<SetStateAction<keyof typeof themes>>];
const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeColor, setThemeColor] = useState<keyof typeof themes>(() => {
    const theme = localStorage.getItem("data-theme") || "default";
    return theme === "default" ? "default" : "dark";
  });
  const value = useMemo<ThemeContextType>(() => [themeColor, setThemeColor], [themeColor]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeColor);
    localStorage.setItem("data-theme", themeColor);
  }, [themeColor]);

  const theme = createTheme({
    palette: colorTheme,
    typography: typography,
    components: components,
  });
  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Invalid hook call");
  }
  return context;
}
