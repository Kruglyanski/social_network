import React from 'react'
import {DialogsItem} from './DialogsItem/DialogsItem'
import cls from './Dialogs.module.css'
import {MessagesItem} from './MessagesItem/MessagesItem'
import type {DialogPageType} from '../../redux/state'

type DialogsType = {
    dialogsState: DialogPageType
}
export const Dialogs: React.FC<DialogsType>= (props) => {
    return (
        <div className={cls.dialogs}>
            <h2>Dialogs</h2>
            <div className={cls.dialogsItems}>
                {props.dialogsState.dialogs.map(
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
                    <textarea/>
                    <button> Submit</button>
                </div>
                {props.dialogsState.messages.map(
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