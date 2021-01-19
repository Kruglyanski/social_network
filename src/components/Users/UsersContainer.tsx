import {connect} from 'react-redux'
import {DispatchType, StateType, UserIdType, UserType} from '../../types'
import {

    follow, setCurrentPage, setPagesCount, setUsers, toggleIsFetching,
    unFollow

} from '../../redux/actions'

import {UsersAPIComponent} from './UsersAPIComponent'


const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        pagesCount: state.usersPage.pagesCount,
        isFetching: state.usersPage.isFetching


    }
}
// const mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         follow: (userId: UserIdType) => {
//             dispatch(follow(userId))
//         },
//
//         unFollow: (userId: UserIdType) => {
//             dispatch(unFollow(userId))
//         },
//
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsers(users))
//         },
//
//         setPagesCount: (count: number) => {
//             dispatch(setPagesCount(count))
//         },
//
//         setCurrentPage: (currentPageNumber: number) => {
//             dispatch(setCurrentPage(currentPageNumber))
//         },
//
//         toggleIsFetching: (isFetch: boolean) => {
//             dispatch(toggleIsFetching(isFetch))
//         }
//
//     }
// }

export const UsersContainer = connect(mapStateToProps, {follow, unFollow, setUsers, setPagesCount, setCurrentPage, toggleIsFetching })(UsersAPIComponent)