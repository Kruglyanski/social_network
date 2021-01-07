import React from 'react'
import cls from './Post.module.css'
import {PostType} from '../../../../redux/state'



export const Post:React.FC<PostType> = (props) => {
    return (

            <div className={cls.item}>
                <div className={cls.avatar}>
                    <img
                        alt='avatar'
                        src='https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
                    />
                </div>
                <div className={cls.text}>
                    {props.message}
                </div>
                <div className={cls.likes}>
                    Likes: {props.likesCount}
                </div>
            </div>

    )
}