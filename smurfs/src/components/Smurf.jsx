import React from 'react'

const Smurf = ({ smurf }) => {
    return (
        <div className="smurf">
            <span>{smurf.name}</span>
            <span>{smurf.age}</span>
            <span>{smurf.height}</span>
        </div>
    )
}

export default Smurf
