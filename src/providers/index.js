import React from 'react'
import PropTypes from 'prop-types'
import { AuthProvider } from './AuthProvider'

const AppProviders = ({ children }) => <AuthProvider>{children}</AuthProvider>

AppProviders.propTypes = {
  children: PropTypes.element.isRequired,
}
export default AppProviders
