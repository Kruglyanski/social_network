import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import './App.css'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {SidebarContainer} from './components/Sidebar/SidebarContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import MyProfileContainer from './components/Profile/MyProfileContainer'
import {connect} from 'react-redux'
import {authIsFetching} from './redux/authReducer'
import {appInitSuccess} from './redux/appReducer'
import {StateType} from './types'
import {compose} from 'redux'
import {Preloader} from './components/common/Preloader/Preloader'
import {Users} from './components/Users/Users'
import {setAuth} from './redux/authReducer'


type PropsType = {
    initApp: (arg: boolean) => void
    initialized: boolean
    appInitSuccess: any
    authIsFetching: any
    setAuth: any

}

class App extends React.Component<PropsType> {
    componentDidMount = async () => {
        this.props.authIsFetching(true)
        await this.props.setAuth()
        this.props.authIsFetching(false)
        this.props.appInitSuccess(true)



    }

    render() {

        if (!this.props.initialized) return <Preloader/>

        return (

            <div className="app-wrapper">
                <HeaderContainer/>

                <SidebarContainer/>

                <div className="content">
                    {/*@ts-ignore*/}
                    <Route path="/my_profile" render={() => <MyProfileContainer/>}/>
                    {/*@ts-ignore*/}
                    <Route path="/profile/:userId" render={() => <ProfileContainer/>}/>
                    {/*@ts-ignore*/}
                    <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>

                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/users" render={() => <Users/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <Login/>}/>

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state: StateType) => {

    return {
        initialized: state.app.initialized
    }
}
export const ConnectedApp = compose(
    withRouter,
    connect(mapStateToProps, {setAuth, authIsFetching, appInitSuccess})
)(App)
