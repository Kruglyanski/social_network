
import {
    addPostActionCreator,
    DispatchType,
    NewPostTextType,
    StateType,
    updateNewPostTextActionCreator
} from '../../../redux/store'
import {connect} from 'react-redux'
import {MyPosts} from './MyPosts'


// type MyPostsType = {
//     posts: Array<PostType>,
//     newPostText: NewPostTextType,
//     dispatch: DispatchType
// }


const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        onPostChange: (text: NewPostTextType) => {

            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)