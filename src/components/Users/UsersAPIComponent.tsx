import React from 'react'


import {UserIdType, UserType} from '../../types'
import axios from 'axios'

import cls from './Users.module.css'
import {Users} from './Users'
import {Preloader} from '../common/Preloader/Preloader'


type PropsType = {
    users: Array<UserType>
    currentPage: number
    pagesCount: number
    pageSize: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setPagesCount: (count: number) => void
    toggleIsFetching: (isFetch: boolean) => void
    isFetching: boolean
}


export class UsersAPIComponent extends React.Component<PropsType> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setPagesCount(response.data.totalCount)
        })

    }

    onFollow = (userId: UserIdType) => {
        this.props.follow(userId)
    }
    onUnFollow = (userId: UserIdType) => {
        this.props.unFollow(userId)
    }
    onPageChange = (page: number) => {
        this.props.toggleIsFetching(true)

        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })


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
                       onFollow={this.onFollow}
                       onUnFollow={this.onUnFollow}
                       onPageChange={this.onPageChange}
                />}
        </>
    }
}