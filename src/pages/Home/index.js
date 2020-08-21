import React from 'react'

import './style.scss'

const Home = () => {
    return (
        <div className='jumbotron'>
            <div className='container'>
                <h1 className='display-4'>Fluid jumbotron</h1>
                <p className='lead'>
                    This is a modified jumbotron that occupies the entire
                    horizontal space of its parent.
                </p>
            </div>
        </div>
    )
}

export default Home
