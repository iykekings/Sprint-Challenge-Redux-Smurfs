import React from 'react'
import Smurf from './Smurf';

const SmurfsList = props => {
    return (
        <div className="smurfs">
            {props.smurfs.map(smurf => <Smurf key={smurf.id}
             smurf={smurf}
             delSmurf={props.delSmurf}/>)}
        </div>
    )
}

export default SmurfsList
