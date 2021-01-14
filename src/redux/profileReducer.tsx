import { ADD_POST, UPDATE_NEW_POST_TEXT} from './actionsTypes'
import {ActionType, PostType, ProfilePageType} from './store'

type ProfileReducerType = (state: ProfilePageType, action: ActionType) => ProfilePageType

const initialState = {
    posts: [
        {id: 1, message: 'First', likesCount: 12},
        {id: 2, message: 'Second', likesCount: 4},
        {id: 3, message: 'Third', likesCount: 34},
        {id: 4, message: 'Fourth', likesCount: 3},
        {id: 5, message: 'Fifth', likesCount: 555}
    ],
    newPostText: 'Enter text'
}

export const profileReducer: ProfileReducerType = (state= initialState, action) => {
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
        default:
            return state
    }

}