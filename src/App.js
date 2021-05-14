import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./themes/GlobalStyle";
import { lightTheme, darkTheme } from "./themes/Themes";
import Toggler from "./components/utils/Toggler";
import { ToggleFunctionality } from "./components/utils/ToggleFunctionality";

const App = () => {
  const [theme, themeToggler, mountedComponent] = ToggleFunctionality();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if(!mountedComponent) return <div />
  return(
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <div>
        <h1>Test</h1>
        <Toggler theme={theme} toggleTheme={themeToggler} />
      </div>
    </ThemeProvider>
  );
};

export default App;