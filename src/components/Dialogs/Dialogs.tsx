import React from 'react'
import {DialogsItem} from './DialogsItem/DialogsItem'
import cls from './Dialogs.module.css'
import {MessagesItem} from './MessagesItem/MessagesItem'
import {DialogType, MessageType, NewMessageBodyType} from '../../types'



type DialogsType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>
    newMessageBody: NewMessageBodyType,
    onMessageChange: (text: string) => void,
    addMessage: () => void
}
export const Dialogs: React.FC<DialogsType>= (props) => {
    let onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void  => {
            props.onMessageChange(e.target.value)
    }
    let addMessage = () => {
        props.addMessage()

    }
    return (
        <div className={cls.dialogs}>
            <h2>Dialogs</h2>
            <div className={cls.dialogsItems}>
                {props.dialogs.map(
                    dialog => <DialogsItem
                        key={dialog.id + Math.random()}
                        id={dialog.id}
                        name={dialog.name}
                        avatar={dialog.avatar}/>)
                }


            </div>
            <div className={cls.messagesItems}>
                <div className={cls.newMessage}>
                    <span>New Message:</span>
                    <textarea  value={props.newMessageBody} onChange={onMessageChange}/>
                    <button onClick={addMessage}> Submit</button>
                </div>
                {props.messages.map(
                    message => <MessagesItem
                        key={message.id + Math.random()}
                        id={message.id}
                        message={message.message}
                        author={message.author}/>)
                }
            </div>

        </div>
    )
}