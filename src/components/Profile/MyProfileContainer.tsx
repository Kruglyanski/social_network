import React from 'react'
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {NewPostTextType, PostType, StateType, UserProfileType} from '../../types'
import {getUserProfile} from '../../redux/actions'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../HOC/withAuthRedirect/withAuthRedirect'
import {compose} from 'redux'


type PropsType = {
    posts: Array<PostType>
    newPostText: NewPostTextType
    profile: UserProfileType | null
    getUserProfile: (userId: string) => void
    isAuth: boolean
    userId: string
}


class MyProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.getUserProfile(this.props.userId)

    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        userId: state.auth.id
    }
}
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)
(MyProfileContainer)

