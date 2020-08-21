import React from 'react'

import Form from '../../components/Form/'
import img from '../../assets/images/mobile-pay.svg'
import telkomsel from '../../assets/icons/telkomsel.png'
import xl from '../../assets/icons/xl.png'
import axis from '../../assets/icons/axis.png'
import three from '../../assets/icons/3.png'
import indosat from '../../assets/icons/indosat.png'
import './style.scss'

const Home = () => {
    const arr = [
        {
            id: 1,
            img: telkomsel,
        },
        {
            id: 2,
            img: xl,
        },
        {
            id: 3,
            img: axis,
        },
        {
            id: 4,
            img: three,
        },
        {
            id: 5,
            img: indosat,
        },
    ]

    return (
        <>
            <div className='jumbotron'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm my-5'>
                            <img src={img} alt='' className='img' />
                        </div>
                        <div className='col-sm'>
                            <h1 className='display-5'>Isi Ulang Pulsa Anda</h1>
                            <p className='lead'>
                                isi ulang pulsa gapake ribet di{' '}
                                <strong>
                                    <span style={{ color: '#112557' }}>
                                        Pulsa
                                    </span>
                                    Kita
                                </strong>
                                , tersedia juga Pembayaran Listrik, Dll.
                            </p>
                            <div className='operator'>
                                {arr.map(s => (
                                    <div key={s.id}>
                                        <img
                                            src={s.img}
                                            alt=''
                                            height={30}
                                            width={40}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container form'>
                <Form />
            </div>
        </>
    )
}

export default Home
