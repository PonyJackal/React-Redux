import React, { useState } from 'react'

const AuthContext = React.createContext()

const AuthProvider = (props) => {
  const [user, setUser] = useState()

  const login = ({ email }) => {
    setUser({ ...user, email })

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Login Success')
      }, 1000)
    })
  }

  return <AuthContext.Provider value={{ login, user }} {...props} />
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
