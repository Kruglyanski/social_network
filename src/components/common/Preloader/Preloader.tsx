import React from 'react'
import preloader from '../../../assets/images/preloader.gif'
import cls from './Preloader.module.css'
export const Preloader = () => {
    return (
        <div className={cls.preloader}>
            <img src={preloader} alt='preloader'/>
        </div>
    )
}