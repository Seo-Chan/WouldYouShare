import useTheme from "../hooks/useTheme";
import React from "react";
import { lightTheme, darkTheme } from "../style/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// theme에 대한 context 생성 및 기존 styled-component의 ThemeProvider 커스텀

const defaultValue = {
  theme: "light",
  onChangeTheme: () => {},
};

export const ThemeContext = React.createContext(defaultValue);

function ThemeProvider({ children }) {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider
        theme={themeProps.theme === "light" ? lightTheme : darkTheme}
      >
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
