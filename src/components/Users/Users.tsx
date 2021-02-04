import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {Preloader} from '../common/Preloader/Preloader'
import cls from './Users.module.css'
import {Paginator} from '../Paginator/Paginator'

import {

    onPageChange,
    unFollowUser, followUser, getUsers

} from '../../redux/actions'
import {RootState} from '../../redux/redux-store'


const userPhoto: string = 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'

export const Users: React.FC = () => {

    const dispatch = useDispatch()
    const usersPage = useSelector((state: RootState) => state.usersPage)

    useEffect(() => {
        dispatch(getUsers(usersPage.currentPage, usersPage.pageSize))
    }, [dispatch, usersPage.currentPage, usersPage.pageSize])

    const onPageChangeHandler = (page: number, pageSize: number) => dispatch(onPageChange(page, pageSize))

    return (
        <>
            {usersPage.isFetching
                ?
                <Preloader/>
                :
                <div className={cls.users}>
                    <Paginator onPageChangeHandler={onPageChangeHandler} pageSize={usersPage.pageSize}
                               totalItemsCount={usersPage.totalItemsCount} currentPage={usersPage.currentPage}/>

                    <h2>Users</h2>
                    {usersPage.users.map(user => {
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
                                        <button disabled={usersPage.followingInProgress.some(id => id === user.id)}
                                                onClick={() => dispatch(unFollowUser(user.id))}>Unfollow</button>
                                        :
                                        <button disabled={usersPage.followingInProgress.some(id => id === user.id)}
                                                onClick={() => dispatch(followUser(user.id))}>Follow</button>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>}
        </>
    )
}