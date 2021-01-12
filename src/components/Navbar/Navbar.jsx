import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
<<<<<<< HEAD
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}><i class="far fa-user-circle"></i><div>Profile</div></NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}><i class="far fa-comments"></i><div>Messages</div></NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}><i class="far fa-newspaper"></i><div>Timeline</div></NavLink></li>
                <li className={s.item}><NavLink to="/friends" activeClassName={s.active}><i class="fas fa-user-friends"></i><div>Friends</div></NavLink></li>
                <li className={s.item}><NavLink to="/users" activeClassName={s.active}><i class="fas fa-users"></i><div>Users</div></NavLink></li>
=======
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
            </ul>
        </nav>
    )
}

export default Navbar;