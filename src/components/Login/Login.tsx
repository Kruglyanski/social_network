import React from 'react'
import {LoginForm} from '../Form/LoginForm'
import {connect} from 'react-redux'
import {login, logout} from '../../redux/actions'
import {StateType} from '../../types'
import {Redirect} from 'react-router-dom'

type PropsType = {
    login: (arg0: any, arg1: any, arg2: any) => void
    isAuth: boolean
}

const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: any) => {
        console.log('formData', formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/my_profile'}/>
    }
    return (
        <div>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: StateType) => {

    return {

        isAuth: state.auth.isAuth

    }
}
export default connect(mapStateToProps, {login, logout})(Login)