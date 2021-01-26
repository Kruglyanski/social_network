import {Form} from 'react-final-form'
import {

    maxValue,
    minValue,
    required
} from '../../utils/validators/validators'
import React from 'react'
import {ValidatedField} from './ValidatedField'


type PropsType = {
    onSubmit: (formData: any) => void
}


export const LoginForm = (props: PropsType) => (
    <Form
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

                <button type="submit">Submit</button>
            </form>
        )}
    />
)