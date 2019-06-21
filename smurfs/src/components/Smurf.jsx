import React from 'react'

const Smurf = ({ smurf, delSmurf }) => {
    return (
        <div className="smurf" onDoubleClick={() => delSmurf(smurf.id)}>
            <p>{smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <span className="del" onClick={() => delSmurf(smurf.id)}>Delete</span>
        </div>
    )
}

export default Smurf
