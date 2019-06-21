import React from 'react'
import { connect } from 'react-redux';
import SmurfsList from '../components/SmurfsList';

const SmurfsView = props => {
    return (
        <SmurfsList {...props} />
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf
})

export default connect(mapStateToProps, {})(SmurfsView)
