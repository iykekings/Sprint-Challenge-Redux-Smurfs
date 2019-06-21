import React from 'react'
import Smurf from './Smurf';

const SmurfsList = props => {
    console.log(props)
    return (
        <div className="smurfs">
            {props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
        </div>
    )
}

export default SmurfsList
