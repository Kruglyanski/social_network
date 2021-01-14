import { ADD_POST, UPDATE_NEW_POST_TEXT} from './actionsTypes'
import {ActionType, ProfilePageType} from './store'

type ProfileReducerType = (state: ProfilePageType, action: ActionType) => ProfilePageType


export const profileReducer: ProfileReducerType = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.payload
            return state
        default:
            return state
    }

}