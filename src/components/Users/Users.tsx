import React from 'react'
import cls from './Users.module.css'
import {UserType} from '../../types'
import {NavLink} from 'react-router-dom'



type PropsType = {
    users: Array<UserType>
    currentPage: number
    pagesCount: number
    pageSize: number
    onPageChange: (page: number, pageSize: number) => void
    followingInProgress: []
    unFollowUser: (userId: number) => any
    followUser: (userId: number) => any
}

const userPhoto: string = 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
export const Users: React.FC<PropsType> = (props) => {
    let pagesCount = Math.ceil(props.pagesCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={cls.users}>
            <div className={cls.pagination}>
                {pages.map(page => <span onClick={() => props.onPageChange(page, props.pageSize)}
                                         className={page === props.currentPage ? cls.current : ''}>{page}</span>)}


            </div>
            <h2>Users</h2>
            {props.users.map(user => {
                return (
                    <div className={cls.userItem} key={user.id}>
                        <div className={cls.avatar}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small ? user.photos.small : userPhoto} alt='photo'/>
                            </NavLink>

                        </div>
                        <div className={cls.description}>
                            <div className={cls.name}>
                                {user.name}
                            </div>
                            <div className={cls.location}>
                                {'user.location.city'}
                                {'user.location.country'}
                            </div>
                        </div>
                        <div className={cls.button}>
                            {user.followed
                                ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => props.unFollowUser(user.id)}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => props.followUser(user.id)}>Follow</button>
                            }
                        </div>
                    </div>
                )
            })}


        </div>
    )
}