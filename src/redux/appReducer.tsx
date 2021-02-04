
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


type AppReducerType = (state: any, action: any) => any

const initialState = {
   initialized: false
}
// export const appReducer: AppReducerType = (state = initialState, action) => {
//
//     switch (action.type) {
//         case APP_INIT_SUCCESS:
//             return {...state, initialized: action.payload}
//
//
//         default:
//             return state
//     }
//
// }


const appReducer = createSlice({
    name: 'appReducer',
    initialState,
    reducers: {
        appInitSuccess(state, action) {
            state.initialized = action.payload
        },


    }

})
export const {appInitSuccess} = appReducer.actions

export default appReducer.reducer