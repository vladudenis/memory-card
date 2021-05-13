import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./themes/GlobalStyle";
import { lightTheme, darkTheme } from "./themes/Themes"

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return(
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div>
        <h1>Test</h1>
        <button onClick={themeToggler}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
      </div>
    </ThemeProvider>
  );
};

export default App;