import cls from './MyPosts.module.css'
import React from 'react'
import {Post} from './Post/Post'
import type {NewPostTextType, PostType} from '../../../redux/store'
import {addPostActionCreator, DispatchType, updateNewPostTextActionCreator} from '../../../redux/store'


type MyPostsType = {
    posts: Array<PostType>,
    newPostText: NewPostTextType,
    dispatch: DispatchType
}



export const MyPosts: React.FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }
    let addPost = () => {
        props.dispatch(addPostActionCreator())

    }
    return (
        <div className={cls.myPosts}>
            <h3>
                My posts
            </h3>
            <div className={cls.newPost}>
                <span>New post:</span>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addPost}> Add Post</button>
            </div>
            {props.posts.map(post => {
                return <Post
                    key={post.id + Math.random()}
                    id={post.id}
                    message={post.message}
                    likesCount={post.likesCount}
                />
            })}


        </div>
    )
}