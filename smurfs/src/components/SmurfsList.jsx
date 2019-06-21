import React from 'react'
import Smurf from './Smurf';

const SmurfsList = props => {
    console.log(props)
    return (
        <div className="smurfs">
            {props.smurfs.map(smurf => <Smurf smurf={smurf} />)}
        </div>
    )
}

export default SmurfsList
