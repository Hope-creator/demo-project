<<<<<<< HEAD
import { profileAPI, usersAPI } from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const UPDATE_PROFILE = 'UPDATE_PROFILE';
const SET_FRIENDS = 'SET_FRIENDS';


=======
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091



let initialState = {
<<<<<<< HEAD
    profilePhotos: [
        {id: 1,album_id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIhV8Pk1u_d3Y3fd7vm5OoqmV1a_AZjVDkw&usqp=CAU' },
        {id: 2,album_id: 1, src: 'https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/best-format-to-save-photos_297x176.jpg' },
        {id: 3,album_id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDCKjXF-cQzx2_zCVlkaTIC2BhdYbizRbmA&usqp=CAU' },
        {id: 4,album_id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-U2Bu1dOVzO3EEXdihzV75tnkbO5Y9GVWA&usqp=CAU' },
        {id: 5,album_id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDEdyxcqRnufTlzOgrDhManC7V9S8U8pV3iA&usqp=CAU' },
        {id: 5,album_id: 1, src: 'https://eskipaper.com/images/large-2.jpg' }
    ]
    ,
    
    profile: null,
    status: '',
    friends: null
=======
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 25 },
    ],
    newPostText: '',
    profile: null,
    status: ''
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
<<<<<<< HEAD
=======
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
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state, status: action.status
            }
<<<<<<< HEAD

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        case UPDATE_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_FRIENDS: 
            return {
                ...state,
                friends: action.friends
=======
        case DELETE_POST: 
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
            }

        default: return state;
    }
}

<<<<<<< HEAD
//-----------------------ACTIONS------------------------------------//
=======
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

<<<<<<< HEAD
=======
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

<<<<<<< HEAD
const updateProfileSuccess = (profile) => ({
    type: UPDATE_PROFILE,
    profile
})

const getFriendSuccess = (friends) => ({
    type: SET_FRIENDS,
    friends
})
//---------------------------------------------------//
//------------------------------MIDDLEWARES--------------------------//
=======

>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
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

export const savePhoto = (file) => async (dispatch) => {
    let formData = new FormData();
    formData.append('image', file);
    let response = await profileAPI.updatePhoto(formData);
        if (response.data.resultCode === 0) {

            dispatch(savePhotoSuccess(response.data.data.photos));
        }
}

<<<<<<< HEAD
export const updateProfile = (profile) => async (dispatch) => {
    try{
        let response = await profileAPI.updateProfile(profile);
    
        if (response.data.resultCode === 0) {
            dispatch(updateProfileSuccess(profile));
            return 'success'
        }
        else{return response.data.messages}}
        catch(err) {console.log(err)}
}

export const getFriends = () => async (dispatch) => {
    let response = await usersAPI.getFriends();
    let copyResponse = [...response.data.items];
    let randomTenFriends = [];
    for (let i = 0; i<10;i++) {
        let randomInt = Math.floor(Math.random() * copyResponse.length);
        randomTenFriends = [...randomTenFriends,copyResponse[randomInt]];
        copyResponse.splice(randomInt, 1);
    }
    dispatch(getFriendSuccess(randomTenFriends));
}
//---------------------------------------------------//

=======
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
export default profileReducer;