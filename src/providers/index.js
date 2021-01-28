import React from 'react'
import { AuthProvider } from './AuthProvider'

const AppProviders = ({ children }) => <AuthProvider>{children}</AuthProvider>

export default AppProviders
