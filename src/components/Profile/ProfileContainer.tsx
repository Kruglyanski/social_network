import React from 'react'
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {NewPostTextType, PostType, StateType, UserProfileType} from '../../types'
import {setUserProfile} from '../../redux/actions'
import axios from 'axios'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type PropsType = {
    posts: Array<PostType>
    newPostText: NewPostTextType
    profile: UserProfileType | null
    setUserProfile: (profile: UserProfileType) => void
}

type MatchParams = {
    userId: string;
}
class ProfileContainer extends React.Component<PropsType & RouteComponentProps<MatchParams>> {
    componentDidMount(): void {
        console.log('this.props.match.params', this.props.match.params)

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`).then(response => {

            this.props.setUserProfile(response.data)
        })
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}
const WithUrlDataProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer)
