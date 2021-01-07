import React from 'react'
import cls from './MessagesItem.module.css'
import type {MessageType} from '../../../redux/state'
export const MessagesItem: React.FC<MessageType> = (props) => {
    return (
        <div className={cls.item}>
            {props.message}
        </div>
    )
}