import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }
    handleInputChange(target) {
        this.setState({...this.state, [target.id]: target.value})
    }
    addSmurf(e) {
        e.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({name: '', age: '', height: ''})
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.addSmurf(e)}>
                    <input type="text" name="" id="name" value={this.state.name}
                    onChange={e => this.handleInputChange(e.target)}/>
                    <input type="text" name="" id="age" value={this.state.age}
                    onChange={e => this.handleInputChange(e.target)}/>
                    <input type="text" name="" id="height" value={this.state.height}
                    onChange={e => this.handleInputChange(e.target)}/>
                    <input type="submit" value="Add Smurf"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addSmurf})(SmurfForm)