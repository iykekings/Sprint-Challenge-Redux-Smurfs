import React from 'react'
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import SmurfsList from '../components/SmurfsList';

class SmurfsView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount()  {
        this.props.fetchSmurfs()
    }

    render() {
        if(this.props.fetchingSmurfs) {
            return <p style={{fontWeight: 'bold', color: 'green'}}>Fetching Smurfs...</p>
        } else if(this.props.error) {
            return <p style={{fontWeight: 'bold', color: 'red'}}>{this.props.error}</p>
        }
        return <SmurfsList {...this.props} />
        }
    }


const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf
})

export default connect(mapStateToProps, {fetchSmurfs})(SmurfsView)
