import {
    ADD_MESSAGE,
    ADD_POST,
    APP_INIT_SUCCESS,
    AUTH_ISFETCHING,
    FOLLOWING_IN_PROGRESS,
    SET_USER_DATA,
    SET_USER_PROFILE,
    SET_USER_STATUS,
    UPDATE_NEW_MESSAGE_BODY,
    UPDATE_NEW_POST_TEXT,
    USER_FOLLOW,
    USER_ISFETCHING_TOGGLE,
    USER_SET_CURRENT_PAGE,
    USER_SET_PAGES_COUNT,
    USER_SET_USERS,
    USER_UNFOLLOW
} from './actionsTypes'
import {AuthDataType,  UserProfileType, UserType} from '../types'
import {authApi, profileApi, usersApi} from '../api/api'
import {FORM_ERROR} from 'final-form'
import { authIsFetching } from './authReducer'


export type ActionType = UpdateNewPostTextActionCreatorActionType | AddPostActionCreatorActionType |
    AddMessageActionCreatorActionType | UpdateNewMessageBodyActionCreatorActionType | FollowActionActionType |
    UnFollowActionActionType | SetUsersActionType

export type AddPostActionCreatorActionType = {
    type: string

}
export const addPostActionCreator = (): AddPostActionCreatorActionType => {
    return {
        type: ADD_POST
    }
}

export type UpdateNewPostTextActionCreatorActionType = {
    type: string,
    payload: string
}


export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionCreatorActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        payload: text
    }

}

export type AddMessageActionCreatorActionType = {
    type: string
}

export const addMessageActionCreator = (): AddMessageActionCreatorActionType => {
    return {
        type: ADD_MESSAGE

    }
}

export type UpdateNewMessageBodyActionCreatorActionType = {
    type: string,
    payload: string
}

export const updateNewMessageBodyActionCreator = (text: string): UpdateNewMessageBodyActionCreatorActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        payload: text
    }

}

export type FollowActionActionType = {
    type: string,
    payload: number
}

export const follow = (userId: number): FollowActionActionType => {
    return {
        type: USER_FOLLOW,
        payload: userId
    }

}
export type UnFollowActionActionType = {
    type: string,
    payload: number
}

export const unFollow = (userId: number): UnFollowActionActionType => {
    return {
        type: USER_UNFOLLOW,
        payload: userId
    }

}
export type SetUsersActionType = {
    type: string,
    payload: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => {
    return {
        type: USER_SET_USERS,
        payload: users
    }
}
export type SetPagesCountType = {
    type: string,
    payload: number
}
export const setPagesCount = (count: number): SetPagesCountType => {
    return {
        type: USER_SET_PAGES_COUNT,
        payload: count
    }
}

export type SetCurrentPageType = {
    type: string,
    payload: number
}

export const setCurrentPage = (pageNumber: number): SetCurrentPageType => {
    return {
        type: USER_SET_CURRENT_PAGE,
        payload: pageNumber
    }

}
export type ToggleIsFetchingType = {
    type: string,
    payload: boolean
}

export const toggleIsFetching = (isFetch: boolean): ToggleIsFetchingType => {
    return {
        type: USER_ISFETCHING_TOGGLE,
        payload: isFetch
    }
}
export type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    payload: UserProfileType
}

export const setUserProfile = (profile: UserProfileType): setUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        payload: profile
    }
}

export type setUserDataType = {
    type: typeof SET_USER_DATA
    payload: AuthDataType
}

// export const setUserData = ({ email, password, id, isAuth}: AuthDataType): setUserDataType => {
//     return {
//         type: SET_USER_DATA,
//         payload: { email, password, id, isAuth}
//     }
// }

export type AuthIsFetchingType = {
    type: typeof AUTH_ISFETCHING,
    payload: boolean
}

// export const authIsFetching = (isFetch: boolean): AuthIsFetchingType => {
//     return {
//         type: AUTH_ISFETCHING,
//         payload: isFetch
//     }
// }

export type FollowingInProgressType = {
    type: typeof FOLLOWING_IN_PROGRESS,
    payload:
        {
            isFollow: boolean
            userId: number
        }
}

export const followingProgress = (isFollow: boolean, userId: number): FollowingInProgressType => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        payload: {
            isFollow,
            userId
        }

    }
}



export type SetUserStatusType = {
    type: typeof SET_USER_STATUS,
    payload: string | null

}

export const setUserStatus = (status: string | null): SetUserStatusType => {
    return {
        type: SET_USER_STATUS,
        payload: status

    }
}

export type InitAppSuccessType = {
    type: typeof APP_INIT_SUCCESS,
    payload: boolean

}

export const initAppSuccess= (payload: boolean): InitAppSuccessType => {
    return {
        type: APP_INIT_SUCCESS,
        payload

    }
}



//===========THUNKS=====================
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    usersApi.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setPagesCount(data.totalCount))
    })
}


export const onPageChange = (page: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    usersApi.changePage(page, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    })

}
export const unFollowUser = (userId: number) => (dispatch: any) => {
    dispatch(followingProgress(true, userId))
    usersApi.deleteFollow(userId).then(resultCode => {
        if (resultCode === 0) {
            dispatch(unFollow(userId))
            dispatch(followingProgress(false, userId))
        }
    })
}

export const followUser = (userId: number) => (dispatch: any) => {
    dispatch(followingProgress(true, userId))
    usersApi.postFollow(userId).then(resultCode => {
        if (resultCode === 0) {
            dispatch(follow(userId))
            dispatch(followingProgress(false, userId))
        }
    })
}

export const getUserProfile = (userId: string) => (dispatch: any) => {
    usersApi.setUser(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}

// export const setAuth = () => (dispatch: any) => {
//     dispatch(authIsFetching(true))
//     return authApi.me().then(data => {
//         dispatch(authIsFetching(false))
//         if (data.resultCode === 0) {
//             const { email, password, id} = data.data
//             dispatch(setUserData({ email, password, id, isAuth: true}))
//         }
//     })
// }

export const getUserStatus = (userId: string ) => (dispatch: any) => {
    profileApi.getProfileStatus(userId).then(data=>{
            dispatch(setUserStatus(data.data))

    })
}

export const updateUserStatus = (status: string) => (dispatch: any) => {
    profileApi.updateProfileStatus(status).then(data=>{
        if (data.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    dispatch ({type: FORM_ERROR, payload: ''})
    authApi.login(email, password, rememberMe).then(data=>{

        if (data.data.resultCode === 0) {
            // dispatch(setAuth())

        }else dispatch ({type: FORM_ERROR, payload: data.data.messages[0]})
    })
}

export const logout = () => (dispatch: any) => {
    authApi.logout().then(data=>{
        if (data.data.resultCode === 0) {
            // dispatch(setUserData({email: null, password: null, id: null, isAuth: false}))
        }
    })
}

// export const initApp =  (payload: boolean) => async (dispatch: any) => {
//     let promise = await dispatch(setAuth())
//         Promise.all([promise]).then(dispatch(initAppSuccess(payload)))
//
// }