
import {FORM_ERROR} from 'final-form'



type FormErrorReducerType = (state: any, action: any) => any

const initialState = {
    formErrorMessage: ''
}
export const formErrorReducer: FormErrorReducerType = (state = initialState, action) => {

    switch (action.type) {
        case FORM_ERROR:
            return {...state, formErrorMessage: action.payload}


        default:
            return state
    }

}