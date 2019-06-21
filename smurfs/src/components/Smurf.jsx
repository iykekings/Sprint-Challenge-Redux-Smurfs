import React from 'react'

const Smurf = ({ smurf }) => {
    return (
        <div className="smurf">
            <p>{smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
    )
}

export default Smurf
