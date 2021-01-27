import React from 'react'
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import MainLayout from "./components/MainLayout";
import {
  RouteWithComponent,
  Login,
  NotFound
} from './components'

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from='/' to="/home" />
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/home">
        <RouteWithComponent component={MainLayout} />
      </Route>
      <Route exact path="/not-found">
        <RouteWithComponent component={NotFound} />
      </Route>
      <Redirect to="not-found" />
    </Switch>
  )
}

export default Routes