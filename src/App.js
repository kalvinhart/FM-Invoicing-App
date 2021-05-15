import { useState } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
