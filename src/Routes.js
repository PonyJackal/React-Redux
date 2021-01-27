import React from 'react'
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import MainLayout from "./components/MainLayout";
import {
  RouteWithComponent,
  Login
} from './components'

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