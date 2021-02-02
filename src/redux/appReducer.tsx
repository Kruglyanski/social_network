import {APP_INIT_SUCCESS} from './actionsTypes'

type AppReducerType = (state: any, action: any) => any

const initialState = {
   initialized: false
}
export const appReducer: AppReducerType = (state = initialState, action) => {

    switch (action.type) {
        case APP_INIT_SUCCESS:
            return {...state, initialized: action.payload}


        default:
            return state
    }

}