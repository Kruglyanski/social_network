// import cls from './Users.module.css'
// import React from 'react'
// import {UserIdType, UserType} from '../../types'
// import axios from 'axios'
//
// type UsersType = {
//     users: Array<UserType>,
//     follow: (arg: number) => void,
//     unFollow: (arg: number) => void,
//     setUsers: (arg: Array<UserType>) => void
// }
// const userPhoto: string = 'https://yt3.ggpht.com/a/AATXAJwUZo0h0jnPkbjgvyz8sz885KhnbHb6KnIwT4n_=s900-c-k-c0xffffffff-no-rj-mo'
//
// export const Users: React.FC<UsersType> = (props) => {
//     if (props.users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response  => {
//             props.setUsers(response.data.items)
//         })
//     }
//
//
//
//
//
//     let onFollow = (userId: UserIdType) => {
//         props.follow(userId)
//     }
//     let onUnFollow = (userId: UserIdType) => {
//         props.unFollow(userId)
//     }
//
//
//     return (
//         <div className={cls.users}>
//             <h2>Users</h2>
//             {props.users.map(user => {
//                 return (
//                     <div className={cls.userItem}>
//                         <div className={cls.avatar}>
//                             <img src={ user.photos.small ? user.photos.small : userPhoto} alt='photo'/>
//                         </div>
//                         <div className={cls.description}>
//                             <div className={cls.name}>
//                                 {user.name}
//                             </div>
//                             <div className={cls.location}>
//                                 {'user.location.city'}
//                                 {'user.location.country'}
//                             </div>
//                         </div>
//                         <div className={cls.button}>
//                             {user.followed
//                                 ?
//                                 <button onClick={() => onUnFollow(user.id)}>Unfollow</button>
//                                 :
//                                 <button onClick={() => onFollow(user.id)}>Follow</button>
//                             }
//                         </div>
//                     </div>
//                 )
//             })}
//
//
//         </div>
//     )
// }