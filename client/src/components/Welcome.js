import React from 'react'
import '../assets/Welcome.css'

const Welcome = ({title}) => {
    return (
        <div className="welcome">
            <p>Welcome, <span>[name]</span></p>
            <div className='title'>{title}</div>
        </div>
    )
}

export default Welcome
