import {connect} from 'react-redux'
import {Sidebar} from './Sidebar'
import {StateType} from '../../types'

const mapStateToProps = (state: StateType) => {
    return {
        friends: state.sidebar.friends

    }
}


export const SidebarContainer = connect(mapStateToProps)(Sidebar)