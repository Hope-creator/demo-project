import React from 'react';
import s from './Forms.module.css'

export const FormCreator = (Element) => ({input,meta, ...props}) => {
    return (
        <div className={s.formControl}>
<<<<<<< HEAD
        <Element {...input} {...props} className={meta.error && meta.touched && s.error || undefined}/>
=======
        <Element {...input} {...props} className={meta.error && meta.touched && s.error}/>
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
        {meta.submitError && <span>{meta.submitError}</span>}
        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
    )
}