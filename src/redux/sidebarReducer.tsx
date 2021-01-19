import { SidebarType} from '../types'
import {ActionType} from './actions'


type SidebarReducerType = (state: SidebarType, action: ActionType) => SidebarType

const initialState = {

    friends: [
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
        }
    ]

}



export const sidebarReducer: SidebarReducerType = (state= initialState, action) => {
    switch (action.type) {

        default:
            return state
    }

}