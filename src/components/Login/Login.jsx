import { FORM_ERROR } from 'final-form';
import React from 'react';
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
    )
}

const Login = (props) => {
    // redirect if no authorization
    return props.isAuth ? <Redirect to="/profile" />
        : (<div>
            <h1>
                LOGIN
        </h1>
            <LoginFinalForm authFailed={props.authFailed} authErrorMessage={props.authErrorMessage} authLoginThunk={props.authLoginThunk} />
        </div>)
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authErrorMessage: state.auth.authErrorMessage
});

let maspDispatchToProps = { authLoginThunk, authFailed };

export default connect(mapStateToProps, maspDispatchToProps)(Login);