import React from 'react'
import cls from './Users.module.css'
import {UserType} from '../../types'
import {NavLink} from 'react-router-dom'
type PropsType = {
    users: Array<UserType>
    currentPage: number
    pagesCount: number
    pageSize: number
    onFollow: (userId: number) => void
    onUnFollow: (userId: number) => void
    onPageChange: (page: number) => void
}

const userPhoto: string = 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
export const  Users: React.FC<PropsType> = (props) => {
    let pagesCount = Math.ceil(props.pagesCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={cls.users}>
            <div className={cls.pagination}>
                {pages.map(page => <span onClick={() => props.onPageChange(page)} className={page === props.currentPage ? cls.current : ''}>{page}</span>)}


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
                                <button onClick={() => props.onUnFollow(user.id)}>Unfollow</button>
                                :
                                <button onClick={() => props.onFollow(user.id)}>Follow</button>
                            }
                        </div>
                    </div>
                )
            })}


        </div>
    )
}