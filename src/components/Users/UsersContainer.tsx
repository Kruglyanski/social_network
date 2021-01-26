import {connect} from 'react-redux'
import {StateType} from '../../types'
import {

    onPageChange,
    unFollowUser, followUser, getUsers

} from '../../redux/actions'

import {UsersAPIComponent} from './UsersAPIComponent'


const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        pagesCount: state.usersPage.pagesCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress


    }
}


export const UsersContainer = connect(mapStateToProps, {
    getUsers,
    onPageChange,
    unFollowUser,
    followUser
})(UsersAPIComponent)