import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

window.props = [];
const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.profileInfo}><ProfileInfo profile={props.profile} 
            status={props.status} 
            updateStatus={props.updateStatus}/></div>
            <div className={s.profileContent}><MyPostsContainer /></div>
        </div>
    )
}

export default Profile;