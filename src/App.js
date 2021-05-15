import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";

import Header from "./components/shared/Header";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(JSON.parse(localStorage.getItem("theme")));
    }
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Header currentTheme={theme} themeToggle={themeToggle} />
    </ThemeProvider>
  );
};

export default App;
