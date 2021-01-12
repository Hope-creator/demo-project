<<<<<<< HEAD
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const AUTH_LOGIN = 'AUTH_LOGIN';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

=======
import { FORM_ERROR } from "final-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const AUTH_LOGIN = 'AUTH_LOGIN';
const AUTH_FAILED = 'AUTH_FAILED';
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
<<<<<<< HEAD
    captchaUrl: null // captcha will only show with request
=======
    authErrorMessage: null
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case AUTH_LOGIN:
            return {
                ...state,
                isAuth: action.isAuth
            }
<<<<<<< HEAD
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
=======
        case AUTH_FAILED:
            return {
                ...state,
                authErrorMessage: action.errorMessage
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
            }

        default: return state;
    }
}

export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        id,
        login,
        email,
        isAuth
    }
});

export const authLogin = (isAuth) => ({
    type: AUTH_LOGIN,
    isAuth
});

<<<<<<< HEAD
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
});

export const getAuth = () => async (dispatch) => {

=======
export const authFailed = (errorMessage) => ({
    type: AUTH_FAILED,
    errorMessage
});

export const getAuth = () => async (dispatch) => {
    
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
    let response = await authAPI.getAuth()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, login, email, true));
    }
}

<<<<<<< HEAD
export const authLoginThunk = (email, password, captcha) => async (dispatch) => {
    const response = await authAPI.authLogin(email, password, captcha);
    if (response.data.resultCode !== 0) {
        if(response.data.resultCode === 10) dispatch(getCaptchaUrl());
        return response.data.messages
=======
export const authLoginThunk = (email, password) => async (dispatch) => {
    let response = await authAPI.authLogin(email, password);
    if (response.data.resultCode !== 0) {
        dispatch(authFailed(response.messages[0]))
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
    }
    if (response && response.data.resultCode === 0) {
        dispatch(getAuth());
    }
}

export const authLogoutThunk = () => async (dispatch) => {
<<<<<<< HEAD
    const response = await authAPI.authLogout();
=======
    let response = await authAPI.authLogout()
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

<<<<<<< HEAD
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(getCaptchaUrlSuccess(response.data.url));
}

=======
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
export default authReducer;