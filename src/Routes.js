import React from 'react'
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import { default as RouteWithComponent } from './components/RouteWithComponent'
import MainLayout from "./components/MainLayout";
import Login from "./components/Login/Login";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from='/' to="/home" />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        <RouteWithComponent component={MainLayout} />
      </Route>
    </Switch>
  )
}

export default Routes