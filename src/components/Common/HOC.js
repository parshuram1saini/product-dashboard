import React from 'react'
import HomeDashboard from '../HomeDashboard'

function HOC(WrappedComponent) {
    return (props) => {
        return (
            <>
                <HomeDashboard />
                <WrappedComponent {...props} />
            </>
        )
    }
}

export default HOC
