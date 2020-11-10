import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';



let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 25 },
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                {
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0
                }
                ]
            }

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case DELETE_POST: 
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }

        default: return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})


export const getProfile = (id) => async (dispatch) => {
    let response = await profileAPI.getProfile(id)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (id) => async (dispatch) => {
    let response = await profileAPI.getStatus(id)
        dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}

export default profileReducer;