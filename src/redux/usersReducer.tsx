import {
    FOLLOWING_IN_PROGRESS,
    USER_FOLLOW,
    USER_ISFETCHING_TOGGLE,
    USER_SET_CURRENT_PAGE,
    USER_SET_PAGES_COUNT,
    USER_SET_USERS,
    USER_UNFOLLOW
} from './actionsTypes'
import {UserType} from '../types'

const initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    pageSize: 5,
    pagesCount: 20,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

export type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case USER_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case USER_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case USER_SET_USERS:
            return {...state, users: [...action.payload]}
        case USER_SET_PAGES_COUNT:
            return {...state, pagesCount: action.payload}
        case USER_SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case USER_ISFETCHING_TOGGLE:
            return {...state, isFetching: action.payload}
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.isFollow
                    ?
                    [...state.followingInProgress, action.payload.userId]
                    :
                    state.followingInProgress.filter(id => id !== action.payload.userId)
            }

        default:
            return state
    }

}