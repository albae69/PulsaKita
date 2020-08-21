import React from 'react'

import img from '../../assets/images/mobile-pay.svg'
import './style.scss'

const Home = () => {
    return (
        <div className='jumbotron'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm'>
                        <img src={img} alt='' className='img' />
                    </div>
                    <div className='col-sm'>
                        <h1 className='display-6'>Isi Ulang Pulsa Anda</h1>
                        <p className='lead'>
                            isi ulang pulsa gapake ribet di{' '}
                            <span style={{ color: '#112557' }}>Pulsa</span>
                            Kita tersedia juga Pembayaran Listrik, Dll.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
