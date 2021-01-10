import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import cls from './components/Profile/Profile.module.css'
import './App.css'
import {Header} from './components/Header/Header'
import {Dialogs} from './components/Dialogs/Dialogs'
import {Profile} from './components/Profile/Profile'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import type {StateType} from './redux/state'
import {DialogPage} from './components/Dialogs/DialogPage/DialogPage'
import {Sidebar} from './components/Sidebar/Sidebar'

type AppType = {
    state: StateType
}

const App: React.FC<AppType> = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>

                <Sidebar sidebarProps={props.state.sidebar}/>

                <div className={cls.content}>
                    <Route path="/profile" render={() => <Profile profileState={props.state.profilePage}/>}/>
                    <Route exact path="/dialogs" render={() => <Dialogs dialogsState={props.state.dialogsPage}/>}/>
                    <Route path="/dialogs/:id" render={() => <DialogPage/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    {/*state={props.state}*/}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
