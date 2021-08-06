import React from 'react'
import '../assets/Welcome.css'

const Welcome = ({title}) => {
    return (
        <div className="welcome">
            <div className='title'>{title}</div>
        </div>
    )
}

export default Welcome
