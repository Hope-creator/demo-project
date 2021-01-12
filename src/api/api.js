import * as axios from 'axios';
<<<<<<< HEAD
=======
import { getAuth } from '../redux/auth-reducer'
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '65bb7cc5-8d1c-4595-8583-4a11bfe95341'
    }
})

export const usersAPI = {
<<<<<<< HEAD
    getUsers: (currentPage = 1, pageSize = 10, term='', isFriend = false) => instance
        .get(`users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${isFriend}`),
    getFriends: () => instance.get(`users?friend=true&count=100`),
=======
    getUsers: (currentPage = 1, pageSize = 10) => instance
        .get(`users?page=${currentPage}&count=${pageSize}`),
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
    follow: (id) => instance.post(`follow/${id}`),
    unfollow: (id) => instance.delete(`follow/${id}`)
}

export const authAPI = {
    getAuth: () => instance.get(`auth/me`),
<<<<<<< HEAD
    authLogin: (email, password, captcha = null) => instance.post(`auth/login`, {
        email,
        password,
        captcha
=======
    authLogin: (email, password) => instance.post(`auth/login`, {
        email,
        password
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
    }),
    authLogout: () => instance.delete(`auth/login`)
}

export const profileAPI = {
    getProfile: (id) => instance.get(`profile/${id}`),
    getStatus: (id) => instance.get(`profile/status/${id}`),
<<<<<<< HEAD
    updateStatus: (status) => instance.put(`profile/status`, { status }),
    updatePhoto: (file) => instance.put(`profile/photo`,file),
    updateProfile: (profile) => instance.put(`profile`,profile)
}

export const securityAPI = {
    getCaptchaUrl: () => { return instance.get(`security/get-captcha-url`)}
}
=======
    updateStatus: async (status) => instance.put(`profile/status`, { status }),
    updatePhoto: (file) => {
        return instance.put(`profile/photo`,file)
    }
}
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
