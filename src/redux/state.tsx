export type MessageType = {
    id: number,
    message: string
}

export type DialogType = {
    id: number,
    name: string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogPageType
}
const state: StateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'First', likesCount: 12},
            {id: 2, message: 'Second', likesCount: 4},
            {id: 3, message: 'Third', likesCount: 34},
            {id: 4, message: 'Fourth', likesCount: 3},
            {id: 5, message: 'Fifth', likesCount: 555}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Roman'},
            {id: 2, name: 'Denis'},
            {id: 3, name: 'Andrey'},
            {id: 4, name: 'Dimych'}
        ],

        messages: [
            {id: 1, message: 'How r u?'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'BLABLA'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Lorem....'}
        ]
    }
}

export default state
