import {combineReducers, createStore} from 'redux'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {sidebarReducer} from './sidebarReducer'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(rootReducer)

export default store