import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import MainLayout from "./components/MainLayout";
import Login from "./components/Login/Login";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <MainLayout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
