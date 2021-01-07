import React from 'react'
import cls from './DialogsItem.module.css'
import type {DialogType} from '../../../redux/state'


export const DialogsItem: React.FC<DialogType> = (props) => {

    return (
        <div className={cls.item}>
            {props.name}
        </div>
    )
}