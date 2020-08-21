import React from 'react'

import brand from '../../assets/icons/brand.svg'
import './style.scss'

const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light  bg'>
                <div className='navbar-brand'>
                    <img src={brand} alt='' />
                    <p className='brand'>
                        Pulsa<span className='subBrand'>Kita</span>
                    </p>
                </div>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Isi Pulsa
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Voucher Game
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
