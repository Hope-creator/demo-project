import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    //props.profile.aboutMe
    return (
        <div className={s.profile_wrapper}>
            <div className={s.profileBlock}>
                <div className={s.profileHeaderBlock}>
                    <img className={s.profile_picture} src={props.profile.photos.large} />
                    <h3> {props.profile.fullName} </h3>
                    <button>following</button>
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