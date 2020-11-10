import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = (props) => {
    
    return (
        <div>
            learn react
            <User users={props.users}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            />
            <Paginator totalUsersCount = {props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChange={props.onPageChange}
            portionSize={10}
             />
        </div>
    )
}
export default Users;