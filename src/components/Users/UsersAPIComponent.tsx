import React from 'react'
import { UserType} from '../../types'
import {Users} from './Users'
import {Preloader} from '../common/Preloader/Preloader'



type PropsType = {
    users: Array<UserType>
    currentPage: number
    pagesCount: number
    pageSize: number
    isFetching: boolean
    followingInProgress: []
    onPageChange: (page: number, pageSize: number) => void
    unFollowUser: (userId: number) => any
    followUser: (userId: number) => any
    getUsers: (currentPage: number, pageSize: number) => void
}


export class UsersAPIComponent extends React.Component<PropsType> {

    componentDidMount(): void {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching
                ?
                <Preloader/>
                :
                <Users users={this.props.users}
                       currentPage={this.props.currentPage}
                       pagesCount={this.props.pagesCount}
                       pageSize={this.props.pageSize}
                       onPageChange={this.props.onPageChange}
                       followingInProgress={this.props.followingInProgress}
                       unFollowUser={this.props.unFollowUser}
                       followUser={this.props.followUser}
                />}
        </>
    }
}