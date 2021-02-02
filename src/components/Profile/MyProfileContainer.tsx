import React from 'react'
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {NewPostTextType, PostType, StateType, UserProfileType} from '../../types'
import {getUserProfile, updateUserStatus} from '../../redux/actions'
import { withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../HOC/withAuthRedirect/withAuthRedirect'
import {compose} from 'redux'


type PropsType = {
    posts: Array<PostType>
    newPostText: NewPostTextType
    profile: UserProfileType | null
    getUserProfile: (userId: string) => void
    isAuth: boolean
    userId: string
    status: string
    updateUserStatus: (status: string) => void
}


class MyProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.getUserProfile(this.props.userId)

    }


    render() {
        return (
            <Profile {...this.props} status={this.props.status} profile={this.props.profile} updateStatus={this.props.updateUserStatus} />
        )
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        userId: state.auth.id,
        status: state.profilePage.status
    }
}
export default compose(
    connect(mapStateToProps, {getUserProfile, updateUserStatus}),
    withRouter,
    withAuthRedirect
)
(MyProfileContainer)

