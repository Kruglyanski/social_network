import {connect} from 'react-redux'
import {Dialogs} from './Dialogs'
import {DispatchType, NewMessageBodyType, StateType} from '../../types'
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/actions'


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