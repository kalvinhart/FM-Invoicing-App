import { useState, useEffect } from "react";
// Styles
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
// Routing
import { Switch, Route } from "react-router-dom";
// Components
import Header from "./components/shared/Header/Header";
import Home from "./components/Home/Home";
// Context
import InvoicesContext from "./store/InvoicesContext";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState([]);

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

  useEffect(() => {
    const getData = async () => {
      const result = await fetch("./data.json");
      const invoiceData = await result.json();
      if (invoiceData) setData(invoiceData);
    };

    getData();
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <InvoicesContext.Provider value={data}>
        <Header currentTheme={theme} themeToggle={themeToggle} />
        <Switch>
          <Route exact path="/" render={(routeProps) => <Home {...routeProps} />} />
        </Switch>
      </InvoicesContext.Provider>
    </ThemeProvider>
  );
};

export default App;
