import React from 'react'
import cls from './DialogsItem.module.css'
import {NavLink} from 'react-router-dom'
import {DialogType} from '../../../types'


export const DialogsItem: React.FC<DialogType> = (props) => {

    return (
        <NavLink to={`/dialogs/${props.id}`} activeClassName={cls.active}>
            <div className={cls.item}>
                <div className={cls.avatar}>
                    <img alt='ava'
                         src={props.avatar}/>
                </div>
                <p>{props.name}</p>

            </div>
        </NavLink>
    )
}