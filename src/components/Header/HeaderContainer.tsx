import React from 'react'
import {connect} from 'react-redux'
import { StateType} from '../../types'
import {logout} from '../../redux/actions'
import {Header} from './Header'



type PropsType = {
    password: string | null
    email: string | null
    isFetching: boolean

    isAuth: boolean
    logout: () => void
}


export class HeaderContainer extends React.Component<PropsType> {
    componentDidMount(): void {


    }


    render() {
        return <Header {...this.props} />


    }
}

const mapStateToProps = (state: StateType) => {

    return {
        password: state.auth.password,
        email: state.auth.email,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth

    }
}

export default connect(mapStateToProps, { logout})(HeaderContainer)
