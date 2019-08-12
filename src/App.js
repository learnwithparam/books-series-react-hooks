import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchPage from "./pages/searchPage.js";
import BookDetailPage from "./pages/bookDetailPage";
import "./App.css";

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/book/:bookId" exact component={BookDetailPage} />
        <Route component={NoMatchRoute} />
      </Switch>
    </Router>
  );
};

export default App;
