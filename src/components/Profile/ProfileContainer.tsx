import React from 'react'
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {NewPostTextType, PostType, StateType, UserProfileType} from '../../types'
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/actions'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../HOC/withAuthRedirect/withAuthRedirect'
import {compose} from 'redux'


type PropsType = {
    posts: Array<PostType>
    newPostText: NewPostTextType
    profile: UserProfileType | null
    getUserProfile: (userId: string) => void
    getUserStatus: (status: string) => void
    updateUserStatus: (status: string) => void
    isAuth: boolean
    status: string
}

type MatchParams = {
    userId: string
}

class ProfileContainer extends React.Component<PropsType & RouteComponentProps<MatchParams>> {
    componentDidMount(): void {
        this.props.getUserProfile(this.props.match.params.userId)
        this.props.getUserStatus(this.props.match.params.userId)
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
        )
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)

