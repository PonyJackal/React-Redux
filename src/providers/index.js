import React from 'react'
import PropTypes from 'prop-types'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './AuthProvider'

const queryClient = new QueryClient()

const AppProviders = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>{children}</AuthProvider>
  </QueryClientProvider>
)

AppProviders.propTypes = {
  children: PropTypes.elementType.isRequired,
}
export default AppProviders
