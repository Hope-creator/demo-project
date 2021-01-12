import { FORM_ERROR } from 'final-form';
import React from 'react';
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { authLoginThunk } from '../../redux/auth-reducer';
import { composeValidators, maxLength, required } from '../../utils/validators/validators';
import s from './Login.module.css';
import profilePicture from '../../img/profilePic.png'




const LoginFormWrap = (props) => {
    //login form wrapper for testing <Form render/>

    const onSubmit = async values => {
        let errors;
        await props.authLoginThunk(values.login, values.password,values.captcha)
            .then(response => response ? errors = [...response] : null)
        return { [FORM_ERROR]: errors }
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitError }) => (
                <form onSubmit={handleSubmit}>
                    <img className={s.loginPicture} src={profilePicture} alt="profilepic" />
                    <div >
                        <Field name="login" validate={composeValidators(required, maxLength(30))} >
                            {({ input, meta }) => (
                                <div className={s.fieldWrap}>
                                    <input {...input} type="text" placeholder="Login" />
                                    {meta.error && meta.touched && <span className={s.fieldError}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div >
                        <Field name="password" validate={composeValidators(required, maxLength(30))} >
                            {({ input, meta }) => (
                                <div className={meta.error? s.metaError + ' ' +s.fieldWrap : s.fieldWrap}>
                                    <input {...input} type="password" placeholder="Enter a password" />
                                    {meta.error && meta.touched && <span className={s.fieldError}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                    {props.captchaUrl && <img src={props.captchaUrl} alt="captcha" />}
                        {submitError && <div className={s.submitError}>{submitError}</div>}
                        {submitError && props.captchaUrl && <Field name="captcha" validate={composeValidators(required)} >
                            {({ input, meta }) => (
                                <div className={s.fieldWrap}>
                                    <input {...input} type="text" placeholder="Enter a symbols" />
                                    {meta.error && meta.touched && <span className={s.fieldError}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>}
                        <button className={s.submitBtn} type="submit"> <span className={s.submitBtnText}>Login</span></button>
                    </div>
                    <div>
                        <span className={s.footerText}><a href="">Forgot password?</a></span>
                    </div>
                </form>
            )}
        />
=======
import { authLoginThunk, authFailed } from '../../redux/auth-reducer';
import { composeValidators, maxLength, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsContol/FormsControl';


const LoginForm = (props) => {
    //custom Error field for props error message
    const Error = ({ name }) => (
        <Field
          name={name}
          subscription={{ touched: true, error: true }}
          render={({ meta: { touched, error = props.authErrorMessage } }) =>
          touched && error ? <span>{error}</span> : null
          }
        />
      )
    // login form
    return (
        <form  onSubmit={props.onSubmit}>
            <div>
                <Field onClick={props.authFailed(null)} name="login" placeholder="login" validate={composeValidators(required, maxLength(30))} component={Input} type="text" />
                
            </div>
            <div>
                <Field onClick={props.authFailed(null)} name="password" placeholder="password" validate={composeValidators(required, maxLength(15))} component={Input} type="text" />
            </div>
            <div>
                <Field onClick={props.authFailed(null)} name="checkbox" component="input" type="checkbox" /> remember me
                </div>
                <Error name="login" />
            <div>
                <button type="submit">Login</button>
            </div>
            <div>
                <button type="button" onClick={() =>  props.resetForm()}>Reset form</button>
            </div>
        </form>)
}

const LoginFinalForm = (props) => {
    //login form wrapper for testing <Form render/>
    return (
        <Form
            onSubmit={(values)=>{
               props.authLoginThunk(values.login, values.password);
            }}
        >
            {({ handleSubmit, form }) => (
                <LoginForm authFailed={props.authFailed}  authErrorMessage={props.authErrorMessage} onSubmit={handleSubmit} resetForm={form.reset} />)}
        </Form>
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
    )
}

const Login = (props) => {
    // redirect if no authorization
    return props.isAuth ? <Redirect to="/profile" />
<<<<<<< HEAD
        : (<div className={s.loginWrapper}>
            <h1>
                Account Access
        </h1>
            <LoginFormWrap captchaUrl={props.captchaUrl} authFailed={props.authFailed} authErrorMessage={props.authErrorMessage} authLoginThunk={props.authLoginThunk} />
            
=======
        : (<div>
            <h1>
                LOGIN
        </h1>
            <LoginFinalForm authFailed={props.authFailed} authErrorMessage={props.authErrorMessage} authLoginThunk={props.authLoginThunk} />
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
        </div>)
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
<<<<<<< HEAD
    authErrorMessage: state.auth.authErrorMessage,
    captchaUrl: state.auth.captchaUrl
});

let maspDispatchToProps = { authLoginThunk };
=======
    authErrorMessage: state.auth.authErrorMessage
});

let maspDispatchToProps = { authLoginThunk, authFailed };
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091

export default connect(mapStateToProps, maspDispatchToProps)(Login);