import {ADD_POST, SET_USER_PROFILE, SET_USER_STATUS, UPDATE_NEW_POST_TEXT} from './actionsTypes'
import {PostType, ProfilePageType} from '../types'
import {ActionType} from './actions'


type ProfileReducerType = (state: ProfilePageType, action: any) => ProfilePageType

const initialState = {
    posts: [
        {id: 1, message: 'First', likesCount: 12},
        {id: 2, message: 'Second', likesCount: 4},
        {id: 3, message: 'Third', likesCount: 34},
        {id: 4, message: 'Fourth', likesCount: 3},
        {id: 5, message: 'Fifth', likesCount: 555}
    ],
    newPostText: 'Enter text',
    profile: null,
    status: 'ReduxStatus'
}

export const profileReducer: ProfileReducerType = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.payload}
        case SET_USER_PROFILE:
            return {...state, profile: action.payload}
            case SET_USER_STATUS:
            return {...state, status: action.payload}
        default:
            return state
    }

}

