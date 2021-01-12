import React from 'react';
import { useState } from 'react';
import s from './Paginator.module.css';

let Paginator = ({ totalUsersCount, currentPage, onPageChange, pageSize, portionSize }) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];

    let [portionNumber, setPortionNumber] = useState(1);

    let portionCount = Math.ceil(pageCount / portionSize);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.footerPages}>
            { portionNumber > 1 &&
                <button onClick={()=> setPortionNumber(portionNumber - 1)}>Left</button>
            }
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((page) =>
<<<<<<< HEAD
                    <span key={page} className={currentPage === page && s.selectedPage || undefined}
=======
                    <span className={currentPage === page && s.selectedPage}
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
                        onClick={(e) => onPageChange(page)}
                    >{page}
                    </span>)}
            { portionNumber < portionCount &&
                <button onClick={()=> setPortionNumber(portionNumber + 1)}>Right</button>
            }
        </div>
    )
}

export default Paginator;