import React from 'react';
import loaded from '../assets/loaded.gif'

function Loaded() {
    return (
        <div className="start">
        <h1 className="start__loaded">
        <img src={loaded} alt='Loaded'/>
        </h1>
        </div>
    )
}

export default Loaded;
