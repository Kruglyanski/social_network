import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {sidebarReducer} from './sidebarReducer'
import {usersReducer} from './usersReducer'
import {authReducer} from './authReducer'
import thunkMiddleware from 'redux-thunk'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,


})

let store = createStore(rootReducer, compose(
    applyMiddleware(
        thunkMiddleware
    ),
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
)
//@ts-ignore
window.store = store
export default store