import {ADD_MESSAGE, ADD_POST, UPDATE_NEW_MESSAGE_BODY, UPDATE_NEW_POST_TEXT} from './actionsTypes'
// // import {profileReducer} from './profileReducer'
// //import {dialogsReducer} from './dialogsReducer'
// //import sidebarReducer} from './sidebarReducer'
//
// let store = {
//     _state: {
//
//     profilePage: {
//         posts: [
//             {id: 1, message: 'First', likesCount: 12},
//             {id: 2, message: 'Second', likesCount: 4},
//             {id: 3, message: 'Third', likesCount: 34},
//             {id: 4, message: 'Fourth', likesCount: 3},
//             {id: 5, message: 'Fifth', likesCount: 555}
//         ],
//         newPostText: 'Enter text'
//     },
//
//     dialogsPage: {
//         dialogs: [
//             {
//                 id: 1,
//                 name: 'Roman',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {
//                 id: 2,
//                 name: 'Denis',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {
//                 id: 3,
//                 name: 'Andrey',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {
//                 id: 4,
//                 name: 'Denis',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {
//                 id: 5,
//                 name: 'Andrey',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {
//                 id: 6,
//                 name: 'Denis',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {
//                 id: 7,
//                 name: 'Andrey',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {
//                 id: 8,
//                 name: 'Dimych',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             }
//         ],
//
//         messages: [
//             {id: 1, message: 'How r u?', author: 'Roman'},
//             {id: 2, message: 'Hello', author: 'Denis'},
//             {id: 3, message: 'BLABLA', author: 'Roman'},
//             {id: 4, message: 'Yo', author: 'Denis'},
//             {id: 5, message: 'Lorem....', author: 'Roman'}
//         ],
//         newMessageBody: '',
//     },
//     sidebar: {
//         friends: [
//             {
//                 id: 1,
//                 name: 'Roman',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {
//                 id: 2,
//                 name: 'Denis',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {
//                 id: 3,
//                 name: 'Andrey',
//                 avatar: 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//             }
//         ]
//
//     }
//
//
// },
//     getState(){
//         return this._state
//     },
//     _callSubscriber(state: StateType){
//     },
//
//      subscribe(observer: (state: StateType) => void){
//          this._callSubscriber = observer
//     },
//
//     dispatch(action: ActionType){
//         //this._state.profilePage = profileReducer(this._state.profilePage, action)
//         //this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         //this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber(this._state)
//     }
// }
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
        payload: ''
    }
}
export const updateNewPostTextActionCreator = (text: NewPostTextType) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        payload: text
    }

}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
        payload: ''
    }
}
export const updateNewMessageBodyActionCreator = (text: NewPostTextType) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        payload: text
    }

}


export type MessageType = {
    id: number,
    message: string,
    author: string
}

export type DialogType = {
    id: number,
    name: string,
    avatar: string
}

export type FriendType = {
    id: number,
    name: string,
    avatar: string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type NewPostTextType = string
export type NewMessageBodyType = string

export type AddPostType = () =>  void

export type UpdateNewPostTextType = (postMessage: string) =>  void

export type ActionType = {
    type: string,
    payload: NewPostTextType
}
export type DispatchType = (action: ActionType) => ActionType

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: NewPostTextType
}

export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageBody: NewMessageBodyType
}
export type SidebarType = {
    friends: Array<FriendType>
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

// export default store

