import React, {useState} from 'react'
import cls from './Paginator.module.css'

type PropsType = {
    currentPage: number
    pageSize: number
    onPageChange: (page: number, pageSize: number) => void
    totalItemsCount: number
    portionSize?: number
}
export const Paginator: React.FC<PropsType> = ({portionSize = 10, ...props}) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
        <div className={cls.pagination}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => <span onClick={() => props.onPageChange(page, props.pageSize)}
                                               className={page === props.currentPage ? cls.current : ''}>{page}</span>)}
            {portionNumber < portionCount && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}