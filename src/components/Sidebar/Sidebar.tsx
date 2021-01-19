import React from 'react'
import cls from './Sidebar.module.css'
import {Navbar} from '../Navbar/Navbar'
import {FriendType} from '../../types'


type FriendsType = {
    friends: Array<FriendType>
}


export const Sidebar: React.FC<FriendsType> = (props) => {
    return (
        <div className={cls.sidebar}>
            <Navbar/>
            <h3>Friends</h3>
            <div className={cls.friends}>
                {props.friends.map(friend => {
                    return (
                        <div key={friend.id + Math.random()}>
                            <div className={cls.avatar}>
                                <img alt='ava'
                                     src={friend.avatar}/>
                            </div>

                            {friend.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}