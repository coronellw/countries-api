import { createContext, useContext, useState, PropsWithChildren } from "react";

type modeType = "light" | "dark";

interface ThemeState {
  mode: modeType;
  setMode(mode: modeType): void;
}

const defaultThemeState: ThemeState = {
  mode: "light",
  setMode: (newMode: modeType) => {
    console.log(`default function resp ${newMode}`);
  },
};

const ThemeContext = createContext(defaultThemeState);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<modeType>("light");

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
