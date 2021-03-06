import cls from './MyPosts.module.css'
import React from 'react'
import {Post} from './Post/Post'
import {NewPostTextType, PostType} from '../../../types'


type MyPostsType = {
    posts: Array<PostType>,
    newPostText: NewPostTextType,
    onPostChange: (text: string) => void
    addPost: () => void
}


export const MyPosts: React.FC<MyPostsType> = (props) => {


    let onPostChange = (e:React.ChangeEvent<HTMLTextAreaElement>): any => {

        const text = e.target.value
        props.onPostChange(text)

    }
    let addPost = () => {
        props.addPost()

    }
    return (
        <div className={cls.myPosts}>
            <h3>
                My posts
            </h3>
            <div className={cls.newPost}>
                <span>New post:</span>
                <textarea  value={props.newPostText} onChange={onPostChange}/>
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