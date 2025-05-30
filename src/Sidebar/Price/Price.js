import React from 'react'
import './Price.css'
import Input from '../../components/Input'

function Price({ handleChange }) {

    return (
        <div className='ml'>
            <h2 className="sidebar-title">Price</h2>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type='radio' name='test2' value='' />
                    <span className='checkmark' />All
                </label>

                <Input
                    handleChange={handleChange}
                    value={50}
                    title='$ 0-50'
                    name='test2'
                />
                <Input
                    handleChange={handleChange}
                    value={100}
                    title='$ 50-100'
                    name='test2'
                />
                <Input
                    handleChange={handleChange}
                    value={150}
                    title='$ 100-150'
                    name='test2'
                />
                <Input
                    handleChange={handleChange}
                    value={200}
                    title='Over $150'
                    name='test2'
                />
            </div>

        </div>
    )
}

export default Price