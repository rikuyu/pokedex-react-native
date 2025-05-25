import React, { createContext, useContext, useEffect, useState } from "react";
import { getTheme, saveTheme, Theme } from "@/services/themeStorage";
import { Theme as TamaguiTheme } from "tamagui";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: { children: React.ReactElement | React.ReactElement[] }) => {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    (async () => {
      const saved = await getTheme();
      setThemeState(saved);
    })();
  }, []);

  const setTheme = async (value: Theme) => {
    await saveTheme(value);
    setThemeState(value);
  };

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <TamaguiTheme name={theme}>
        {children}
      </TamaguiTheme>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useAppTheme must be used within ThemeProvider");
  return context;
};
