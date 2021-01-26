import {connect} from 'react-redux'
import {Dialogs} from './Dialogs'
import {DispatchType, NewMessageBodyType, StateType} from '../../types'
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/actions'
import {withAuthRedirect} from '../HOC/withAuthRedirect/withAuthRedirect'
import {compose} from 'redux'


const mapStateToProps = (state: StateType) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth

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


export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)