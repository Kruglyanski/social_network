import './index.css'
import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store'
import ReactDOM from 'react-dom'
import React from 'react'
import {ConnectedApp} from './App'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/*@ts-ignore*/}
                 <ConnectedApp/>
        </BrowserRouter>

    </Provider>,
    document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
