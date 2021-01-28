import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'

const RouteWithComponent = (props) => {
  const { user } = useAuth()
  console.log('user', user)
  const { component: Component } = props

  return user ? <Component /> : <Redirect to="/login" />
}

export default RouteWithComponent
