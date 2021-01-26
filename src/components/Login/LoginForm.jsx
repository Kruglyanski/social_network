// import React from 'react'
// import {reduxForm, Field} from 'redux-form'
// import {maxFieldLengthCreator, requiredField} from '../../utils/validators/validators'
//
// type PropsType = {
//     onSubmit: (formData: any) => void
// }
//
//
// export const LoginForm = (props: PropsType & any) => {
//     const maxLength = maxFieldLengthCreator(10)
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component={"input"} name={"login"} placeholder={"login"} validate={[maxLength]} />
//             </div>
//
//             <div>
//                 <Field component={"input"} name={"password"} placeholder={"password"}/>
//             </div>
//
//             <div>
//                 <Field component={"input"} type={"checkbox"} name={"rememberme"}/> remember me
//             </div>
//
//             <button>Login</button>
//         </form>
//     )
// }
//
//
// export const LoginReduxForm = reduxForm({
//     form: 'login'
// })(LoginForm)