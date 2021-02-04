import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {authApi} from '../api/api'


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

// export const authReducer: AuthReducerType = (state = initialState, action) => {
//     switch (action.type) {
//
//         case SET_USER_DATA:
//             return {...state, ...action.payload}
//         case AUTH_ISFETCHING:
//             return {...state, isFetching: action.payload}
//
//         default:
//             return state
//     }
//
// }

// export const setAuth = () => (dispatch: any) => {
//     dispatch(authIsFetching(true))
//     return authApi.me().then(data => {
//         dispatch(authIsFetching(false))
//         if (data.resultCode === 0) {
//             const { email, password, id} = data.data
//             dispatch(setUserData({ email, password, id, isAuth: true}))
//         }
//     })
// }


export const setAuth = createAsyncThunk(
    'authReducer/setAuth',
    async () => {

        let data = await authApi.me()

        if (data.resultCode === 0) {
            const {email, password, id} = data.data
            return {email, password, id, isAuth: true}
        }


    }
)

const authReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        // setUserData(state, action) {
        //     state = {...state, ...action.payload}
        // },
        authIsFetching(state, action) {

            state.isFetching = action.payload
        }
    },
    extraReducers: {
        // @ts-ignore
        [setAuth.fulfilled]: (state, action) => {
             return {...state, ...action.payload}
            // state.isAuth = action.payload.isAuth
            // state.id = action.payload.id
            // state.password = action.payload.password
            // state.email = action.payload.email

        }
    }
})
export const {authIsFetching} = authReducer.actions

export default authReducer.reducer