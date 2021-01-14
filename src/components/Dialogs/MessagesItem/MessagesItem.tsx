import React from 'react'
import cls from './MessagesItem.module.css'
import type {MessageType} from '../../../redux/store'

export const MessagesItem: React.FC<MessageType> = (props) => {
    const classes = [
        cls.item
    ]
    if (props.author === 'Roman') {
        classes.push(cls.left)
    } else classes.push(cls.right)
    return (
        <div className={classes.join(' ')}>
            <span>{props.author}:</span>
            <p>{props.message}</p>

        </div>
    )
}