import React from 'react'
import cls from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import type {ProfilePageType} from '../../redux/store'
import {DispatchType} from '../../redux/store'


type ProfileType = {
    profileState: ProfilePageType,
    dispatch: DispatchType
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <div className={cls.contentHeader}>
                <img alt='img' src='http://www.longrunexploration.com/upload/main_banner/2/05/banner.jpg'/>
            </div>
            <div className={cls.avaWrapper}>
                <div className={cls.avatar}>
                    <img alt='ava'
                         src='https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'/>
                </div>
                <div className={cls.description}>
                    Description Description
                </div>
            </div>
            <MyPosts posts={props.profileState.posts} dispatch={props.dispatch} newPostText={props.profileState.newPostText} />

        </div>
    )
}