const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsMessages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Yo, how are you" },
        { id: 3, message: "Hi honey, call me when you wake up." },
        { id: 4, message: "Uo" },
        { id: 5, message: "Yo" },
    ],
    newDialogMessage: '',
    dialogsItems: [
        { id: 1, name: "Dima", media_src: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" },
        { id: 2, name: "Andrey", media_src: "https://sun9-31.userapi.com/impf/c624326/v624326383/2db4c/GI9yLp0GMgo.jpg?size=200x0&quality=90&crop=0,0,604,604&sign=0342799ecbe9a287ae8806f6c3afe9f3&ava=1" },
        { id: 3, name: "Sasha", media_src: "https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg" },
        { id: 4, name: "Valeriy", media_src: "https://archilab.online/images/1/123.jpg" },
        { id: 5, name: "Sveta", media_src: "https://klike.net/uploads/posts/2019-03/1551511862_28.jpg" },
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: return {
                ...state,
                dialogsMessages: [...state.dialogsMessages,
                    {id: 5, message: action.message}
                ]
            }

        default: return state;
    }
}

export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message });


export default dialogsReducer;