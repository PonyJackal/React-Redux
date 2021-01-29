import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'

const RouteWithComponent = (props) => {
  const { user } = useAuth()
  const { component: Component } = props

  return user ? <Component /> : <Redirect to="/login" />
}

RouteWithComponent.propTypes = {
  component: PropTypes.elementType.isRequired,
}

export default RouteWithComponent
