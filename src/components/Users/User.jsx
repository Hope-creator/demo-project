import React from 'react';
import s from './Users.module.css';
import profilePicture from '../../img/profilePic.png';
import { NavLink } from 'react-router-dom';

let User = (props) => {

<<<<<<< HEAD
    return (<>
        
        <div className={s.flexWrapper}>
            {props.users.map((u, i, array) => <div key={u.id} className={s.usersItem}>
                <div className={s.mediaHeader}>
                    <NavLink to={"/profile/" + u.id}>
                        <img className={s.profilePic} src={u.photos.small != null ? u.photos.small : profilePicture} />
                    </NavLink>
                    <div className={s.mediaHeaderBody}> <h4>{u.name}</h4>
                        <span><i class="fas fa-users"></i> {array.length}</span>
                        <span><i class="fas fa-camera"></i> 0 </span>
                        <span><i class="fas fa-video"></i> 0 </span> </div>
                </div>
                <div className={s.mediaBody}>
                    <span>Status</span>
                    <div>
                        <span key={u.id}> {u.status != null ? u.status : 'Status is not taken by '} </span>
                    </div>
                </div>
                <div className={s.mediaFooter}>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => { props.unfollow(u.id) }
                        }>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => { props.follow(u.id) }
                            }>Follow</button>}
                </div>
            </div>)}
        </div>
    </>
    )
}



=======
    return (
            <div className={s.flexWrapper}>
                {props.users.map((u, i, array) => <div key={u.id} className={s.usersItem}>
                    <div className={s.mediaHeader}>
                        <NavLink to={"/profile/" + u.id}>
                            <img className={s.profilePic} src={u.photos.small != null ? u.photos.small : profilePicture} />
                        </NavLink>
                        <div className={s.mediaHeaderBody}> <h4>{u.name}</h4>
                            <span>F: {array.length}</span>
                            <span>P: 0 </span>
                            <span>V: 0 </span> </div>
                    </div>
                    <div className={s.mediaBody}>
                        <span>Status</span>
                        <div>
                            <span key={u.id}> {u.status != null ? u.status : 'Status is not taken by '} </span>
                        </div>
                    </div>
                    <div className={s.mediaFooter}>
                        {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => { props.unfollow(u.id) }
                            }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.follow(u.id) }
                                }>Follow</button>}
                    </div>
                </div>)}
            </div>
    )
}
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
export default User;