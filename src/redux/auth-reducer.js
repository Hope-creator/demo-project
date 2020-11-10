import { FORM_ERROR } from "final-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const AUTH_LOGIN = 'AUTH_LOGIN';
const AUTH_FAILED = 'AUTH_FAILED';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    authErrorMessage: null
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
        case AUTH_FAILED:
            return {
                ...state,
                authErrorMessage: action.errorMessage
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

export const authFailed = (errorMessage) => ({
    type: AUTH_FAILED,
    errorMessage
});

export const getAuth = () => async (dispatch) => {
    
    let response = await authAPI.getAuth()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const authLoginThunk = (email, password) => async (dispatch) => {
    let response = await authAPI.authLogin(email, password);
    if (response.data.resultCode !== 0) {
        dispatch(authFailed(response.messages[0]))
    }
    if (response && response.data.resultCode === 0) {
        dispatch(getAuth());
    }
}

export const authLogoutThunk = () => async (dispatch) => {
    let response = await authAPI.authLogout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;