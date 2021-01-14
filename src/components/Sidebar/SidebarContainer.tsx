import {
    StateType
} from '../../redux/store'

import {connect} from 'react-redux'

import {Sidebar} from './Sidebar'

const mapStateToProps = (state: StateType) => {
    return {
        friends: state.sidebar.friends

    }
}


export const SidebarContainer = connect(mapStateToProps)(Sidebar)