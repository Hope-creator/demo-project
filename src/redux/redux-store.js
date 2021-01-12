import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';
<<<<<<< HEAD
import newsReducer from './news-reducer';
import friendsReducer from './friends-reducer';
=======
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
<<<<<<< HEAD
    app: appReducer,
    newsPage: newsReducer,
    friendsPage: friendsReducer
=======
    app: appReducer
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

window.store = store;

export default store;