import React from 'react'
import cls from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {Preloader} from '../common/Preloader/Preloader'

type PropsType = {
    password: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
    logout: () => void
}

export const Header: React.FC<PropsType> = (props) => {

    return (
        <header className={cls.header}>
            <img alt='logo'
                 src='https://yt3.ggpht.com/a/AATXAJyANC7acpclNWRj7YEQyI9ffC4kJoJXGKQSvw=s900-c-k-c0xffffffff-no-rj-mo'
                 className={cls.logoImg}
            />
            <div className={cls.loginBlock}>
                {props.isFetching
                    ?
                    <Preloader/>
                    :
                    <>
                        {
                            props.isAuth
                                ?
                                <div>
                                    <span>{props.email}</span>
                                    <div onClick={props.logout}>Log out</div>
                                </div>

                                :
                                <NavLink to={'/login'}>Login</NavLink>

                        }


                    </>
                }
            </div>
        </header>
    )
}