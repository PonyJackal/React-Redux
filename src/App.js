import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { default as RouteWithComponent } from './components/RouteWithComponent'
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
          <RouteWithComponent component={MainLayout} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
