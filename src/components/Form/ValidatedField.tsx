import {Field} from 'react-final-form'
import React from 'react'
import {composeValidators, ValidatorType} from '../../utils/validators/validators'
import cls from './ValidatedField.module.css'
type PropsType = {
    fieldName: string
    placeholder?: string
    validators? : Array<ValidatorType>
    componentTag: any
    type?: string
}

export const ValidatedField: React.FC<PropsType> = (props) => {
    return <Field
        name={props.fieldName}
        type={props.type}
        validate={props.validators && composeValidators(...props.validators)}
        render={({input, meta}) => (
            <div className={`${meta.touched && meta.error && cls.error} ${cls.validate}`} >
                <props.componentTag {...input} placeholder={props.placeholder}  />
                {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
        )}
    />
}


