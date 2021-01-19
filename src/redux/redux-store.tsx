import {combineReducers, createStore} from 'redux'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {sidebarReducer} from './sidebarReducer'
import {usersReducer} from './usersReducer'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer

})

let store = createStore(rootReducer)
//@ts-ignore
window.store  = store
export default store