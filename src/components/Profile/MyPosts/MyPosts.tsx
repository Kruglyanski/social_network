import cls from './MyPosts.module.css'
import React from 'react'
import {Post} from './Post/Post'
import type {PostType} from '../../../redux/state'

type MyPostsType = {
    posts: Array<PostType>
}
export const MyPosts: React.FC<MyPostsType> = (props) => {
    return (
        <div className={cls.myPosts}>
            <h3>
                My posts
            </h3>
            <div className={cls.newPost}>
                <span>New post:</span>
                <textarea/>
                <button> Add Post</button>
            </div>
            {props.posts.map(post => {
                return <Post key={post.id + Math.random()} id={post.id} message={post.message} likesCount={post.likesCount} />
            })}


        </div>
    )
}