import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./themes/GlobalStyle";
import { lightTheme, darkTheme } from "./themes/Themes";
import { ToggleFunctionality } from "./components/utils/ToggleFunctionality";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
  const [theme, themeToggler, mountedComponent] = ToggleFunctionality();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if(!mountedComponent) return <div />
  return(
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header theme={theme} themeToggler={themeToggler} />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;