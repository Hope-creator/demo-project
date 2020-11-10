import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import profilePicture from '../../../img/profilePic.png';


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    const newPhotoSelected = (e) => {
        props.savePhoto(e.target.files[0])
    }

    //props.profile.aboutMe
    return (
        <div className={s.profile_wrapper}>
            <div className={s.profileBlock}>
                <div className={s.profileHeaderBlock}>
                    <img className={s.profile_picture} src={props.profile.photos.large || profilePicture} />
                    <h3> {props.profile.fullName} </h3>
                    {props.profileOwner && <input type='file' onChange={newPhotoSelected} />}
                </div>
                <div className={s.profileBodyBlock}></div>
                
                <div className={s.profileFooterBlock}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div className={s.contactBlock}>
                Contacts
            {Object.entries(props.profile.contacts).map((el) => { return <span>{el[0]}: <a href={'//' + el[1]} target="_blank">{el[1]}</a></span> })}
            </div>
            <button>Logout</button>
            </div>
        </div>
    )
}

export default ProfileInfo;