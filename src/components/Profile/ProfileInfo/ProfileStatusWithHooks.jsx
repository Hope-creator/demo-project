import React, { useEffect, useState } from "react";
import { updateStatus } from "../../../redux/profile-reducer";
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
    //hooks
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (<div>
        {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '--------'}</span>
            </div>
        }
        {editMode &&
            <div>
                <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
            </div>
        }
        <div className={s.profileFooterShow}></div>
    </div>
    )
}

export default ProfileStatusWithHooks;