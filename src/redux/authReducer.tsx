import {AUTH_ISFETCHING, SET_USER_DATA} from './actionsTypes'


export type AuthType = {
    id: string | null
    password: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}
type AuthReducerType = (state: AuthType, action: any) => AuthType

const initialState = {
    id: null,
    password: null,
    email: null,
    isFetching: false,
    isAuth: false


}

export const authReducer: AuthReducerType = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {...state, ...action.payload}
        case AUTH_ISFETCHING:
            return {...state, isFetching: action.payload}

        default:
            return state
    }

}
