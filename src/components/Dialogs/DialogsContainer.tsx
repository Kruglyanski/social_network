
import { DispatchType, NewMessageBodyType, StateType} from '../../redux/store'
import {
    addMessageActionCreator,
    updateNewMessageBodyActionCreator
} from '../../redux/store'
import {connect} from 'react-redux'
import {Dialogs} from './Dialogs'

// type DialogsType = {
//     dialogsState: DialogsPageType,
//     dispatch: DispatchType,
//     newMessageBody: NewMessageBodyType
// }


const mapStateToProps = (state: StateType) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageBody: state.dialogsPage.newMessageBody

    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        onMessageChange: (body: NewMessageBodyType) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },

        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)