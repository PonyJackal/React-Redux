import React from 'react'

const RouteWithComponent = (props) => {
    const { component: Component } = props

    return <Component />
}

export default RouteWithComponent