import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from './actionsTypes'
import { DialogsPageType} from '../types'


type DialogsReducerType = (state: DialogsPageType, action: any) => DialogsPageType

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Roman',
            avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
            id: 2,
            name: 'Denis',
            avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
            id: 3,
            name: 'Andrey',
            avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
            id: 4,
            name: 'Denis',
            avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
            id: 5,
            name: 'Andrey',
            avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
            id: 6,
            name: 'Denis',
            avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
            id: 7,
            name: 'Andrey',
            avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
            id: 8,
            name: 'Dimych',
            avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
        }
    ],
    messages: [
        {id: 1, message: 'How r u?', author: 'Roman'},
        {id: 2, message: 'Hello', author: 'Denis'},
        {id: 3, message: 'BLABLA', author: 'Roman'},
        {id: 4, message: 'Yo', author: 'Denis'},
        {id: 5, message: 'Lorem....', author: 'Roman'}
    ],
    newMessageBody: ''
}
export const dialogsReducer: DialogsReducerType = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.payload}
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                message: state.newMessageBody,
                author: 'Denis'
            }
            return {...state, messages: [...state.messages, newMessage], newMessageBody: ''}

        default:
            return state
    }

}