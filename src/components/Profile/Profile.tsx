import React from 'react'
import cls from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {NewPostTextType, PostType, UserProfileType} from '../../types'
import {Preloader} from '../common/Preloader/Preloader'
import {Status} from './Status'


type PropsType = {
    posts: Array<PostType>
    newPostText: NewPostTextType
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<PropsType> = (props: PropsType) => {
    if (!props.profile) {
        console.log('noprofile', props.profile)
        return <Preloader/>
    }
    console.log('props.profile', props.profile)
    return (

        <div>

            <div className={cls.contentHeader}>
                <img alt='img' src='http://www.longrunexploration.com/upload/main_banner/2/05/banner.jpg'/>
            </div>
            <Status status={props.status} updateStatus={props.updateStatus}/>

            <div className={cls.avaWrapper}>
                <div className={cls.avatar}>
                    <img alt='ava'
                         src={props.profile.photos.large!}/>
                </div>
                <div className={cls.description}>
                    <h2>{props.profile.fullName}</h2>
                    <span>{props.profile.aboutMe}</span>
                    <br/>
                    <span>{props.profile.contacts.github}</span>
                    <br/>
                    <span>{props.profile.lookingForAJob}</span>
                    <br/>
                    <span>{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
            <MyPostsContainer/>
        </div>

    )
}