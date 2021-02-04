import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {sidebarReducer} from './sidebarReducer'
import {usersReducer} from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import {formErrorReducer} from './formErrorReducer'
import appReducer from './appReducer'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    formError: formErrorReducer,
    app: appReducer

})
export type RootState = ReturnType<typeof rootReducer>

export default configureStore({
        reducer: rootReducer,
        middleware: [thunkMiddleware]

    }) //DEVTOOLS added automatically by configureStore



