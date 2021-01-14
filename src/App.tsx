import React from 'react'
import {Route} from 'react-router-dom'
import cls from './components/Profile/Profile.module.css'
import './App.css'
import {Header} from './components/Header/Header'

import {Profile} from './components/Profile/Profile'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {SidebarContainer} from './components/Sidebar/SidebarContainer'


// type AppType = {
//     state:  Store<CombinedState<{profilePage: never, dialogsPage: never, sidebar: never}>, ActionType>,
//     dispatch: DispatchType
// }

const App: React.FC = () => {


    return (

        <div className="app-wrapper">
            <Header/>

            <SidebarContainer/>

            <div className={cls.content}>
                <Route path="/profile" render={() => <Profile/>}/>
                {/*{console.log('render')}*/}
                <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                {/*<Route path="/dialogs/:id" render={() => <DialogPage/>}/>*/}
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>

            </div>
        </div>

    )
}

export default App
