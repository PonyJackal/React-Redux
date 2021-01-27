import React from "react";
import {
  BrowserRouteer as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import MainLayout from "./components/MainLayout";
import Login from "./components/Login";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLayout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
