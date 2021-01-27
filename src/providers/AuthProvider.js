import React from 'react'

const AuthContext = React.createContext()

const AuthProvider = (props) => {
    const [user, setUser] = React.useState();

    const login = ({ email }) => {
        setUser({
            ...user,
            email
        })
    }

    return (
        <AuthContext.Provider value={{ login, user }} {...props} />
    )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
