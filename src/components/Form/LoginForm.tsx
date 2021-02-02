import {Form} from 'react-final-form'
import {

    maxValue,
    minValue,
    required
} from '../../utils/validators/validators'
import React from 'react'
import {ValidatedField} from './ValidatedField'
import cls from './LoginForm.module.css'


type PropsType = {
    onSubmit: (formData: any) => void
    formErrorMessage: string
}


export const LoginForm = (props: PropsType) => {
    return <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <ValidatedField
                        fieldName={'email'}
                        componentTag={'input'}
                        validators={[required, minValue(3), maxValue(30)]}
                        placeholder={'email'}
                    />
                </div>
                <div>
                    <ValidatedField
                        fieldName="password"
                        componentTag={'input'}
                        validators={[required, minValue(3), maxValue(30)]}
                        placeholder="password"
                        // type="password"
                    />
                </div>

                <div>
                    <ValidatedField
                        type="checkbox"
                        fieldName={'rememberMe'}
                        componentTag={'input'}
                    />
                    remember me
                </div>
                {props.formErrorMessage && <div className={cls.formErrorMessage}>{props.formErrorMessage}</div>}

                <button type="submit">Submit</button>
            </form>
        )}
    />

}


