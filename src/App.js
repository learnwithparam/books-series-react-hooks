import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Global, css } from "@emotion/core";
import normalize from "normalize.css";
import { ThemeProvider } from "emotion-theming";

import theme from "./components/theme";
import SearchPage from "./pages/searchPage.js";
import BookDetailPage from "./pages/bookDetailPage";
import "./App.css";

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${normalize}
          body {
            background-color: #fafafa;
          }
        `}
      />
      <Router>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/book/:bookId" exact component={BookDetailPage} />
          <Route component={NoMatchRoute} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
