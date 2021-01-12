import React from 'react';
<<<<<<< HEAD
import { useEffect } from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { Field, Form } from 'react-final-form';
import s from './Users.module.css';



let Users = (props) => {

    return (
        <div>
            <SearchUserForm 
            setSearchUsersName={props.setSearchUsersName}
            />
=======
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = (props) => {
    
    return (
        <div>
            learn react
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
            <User users={props.users}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            />
<<<<<<< HEAD
        </div>
    )
}

const SearchUserForm = (props) => {

    const onSubmit = values => {
        props.setSearchUsersName(values.searchUser)
    }

    return <Form
        onSubmit={onSubmit}

        render={(props) =>
            <form className={s.searchUsersForm} onSubmit={props.handleSubmit}>
                
                <Field
                    name='searchUser'
                >{({ input, meta }) => (
                    <>
                        <input className={s.searchUsersInput} placeholder="Name" {...input} />
                        <div>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    </>
                )}
                </Field>
                <button className={s.searchUsersButton} type="submit"><i class="fas fa-search"></i></button>
                
            </form>
        }

    />


}
=======
            <Paginator totalUsersCount = {props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChange={props.onPageChange}
            portionSize={10}
             />
        </div>
    )
}
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
export default Users;