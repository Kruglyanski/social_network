import React from 'react'
import {Route} from 'react-router-dom'

import './App.css'

import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {SidebarContainer} from './components/Sidebar/SidebarContainer'
import {UsersContainer} from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import MyProfileContainer from './components/Profile/MyProfileContainer'


const App: React.FC = () => {


    return (

        <div className="app-wrapper">
            <HeaderContainer/>

            <SidebarContainer/>

            <div className="content">
                {/*@ts-ignore*/}
                <Route path="/my_profile" render={() =><MyProfileContainer/>}/>
                {/*@ts-ignore*/}
                 <Route path="/profile/:userId" render={() =><ProfileContainer/>}/>
                {/*@ts-ignore*/}
                <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>

                <Route path="/news" render={() => <News/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/login" render={() => <Login/>}/>

            </div>
        </div>

    )
}

export default App
