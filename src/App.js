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
import Invoice from "./components/Invoice/Invoice";
// Context
import InvoicesContext from "./store/InvoicesContext";
//Utils
import { getData } from "./utils/getData";
// firebase
import firebase from "./firebase/firebase";

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
    const init = () => {
      const query = firebase.firestore().collection("invoices");

      query.get().then((snapshot) => {
        let allData = [];
        snapshot.forEach((doc) => {
          allData.push(doc.data());
        });
        setData(allData);
      });
    };
    init();
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <InvoicesContext.Provider value={{ data, setData }}>
        <Header currentTheme={theme} themeToggle={themeToggle} />
        <Switch>
          <Route exact path="/" render={(routeProps) => <Home {...routeProps} />} />
          <Route
            exact
            path="/invoice/:id"
            render={(routeProps) => <Invoice {...routeProps} />}
          />
        </Switch>
      </InvoicesContext.Provider>
    </ThemeProvider>
  );
};

export default App;
