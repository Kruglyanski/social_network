import React from 'react'
import {Redirect} from 'react-router-dom'



export const withAuthRedirect = (Component: any) => {
    return (props: any) => {
        console.log('props', props)

        if (!props.isAuth) return <Redirect to='/login'/>
        return <Component {...props} />
    }
}