import {
    ADD_MESSAGE,
    ADD_POST, SET_USER_PROFILE,
    UPDATE_NEW_MESSAGE_BODY,
    UPDATE_NEW_POST_TEXT,
    USER_FOLLOW, USER_ISFETCHING_TOGGLE, USER_SET_CURRENT_PAGE, USER_SET_PAGES_COUNT, USER_SET_USERS,
    USER_UNFOLLOW
} from './actionsTypes'
import {NewPostTextType, UserIdType, UserPageType, UserProfileType, UserType} from '../types'

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