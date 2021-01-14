import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from './actionsTypes'
import {ActionType, DialogPageType} from './store'

type DialogsReducerType = (state: DialogPageType, action: ActionType) => DialogPageType
export const dialogsReducer: DialogsReducerType = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                message: state.newMessageBody,
                author: 'Denis'
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.payload
            return state
        default:
            return state
    }

}