import React from 'react'

import './style.scss'

const Form = () => {
    return (
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <input
                        className='form-control'
                        placeholder='Nomor Telepon'
                    />
                </div>
                <div className='col-sm '>
                    <select className='form-control'>
                        <option defaultValue>Pilih Nominal</option>
                        <option>Pulsa 100.000 = Rp.120.000</option>
                    </select>
                </div>
                <div className='col-sm'>
                    <button className='form-control'>Beli</button>
                </div>
            </div>
        </form>
    )
}

export default Form
