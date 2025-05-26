import React, { useState } from 'react'
import Input from '../../components/Input'
import './Category.css'

function Category({handleChange}) {

    return (
        <div>
            <h2 className='sidebar-tite'>Category</h2>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type='radio' name='test' value=''/>
                    <span className='checkmark'/>All
                </label>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type='radio' name='test' value=''/>
                    <span className='checkmark'/>All
                </label>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type='radio' name='test' value=''/>
                    <span className='checkmark'/>All
                </label>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type='radio' name='test' value=''/>
                    <span className='checkmark'/>All
                </label>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type='radio' name='test' value=''/>
                    <span className='checkmark'/>All
                </label>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type='radio' name='test' value=''/>
                    <span className='checkmark'/>All
                </label>

                <Input
                    handleChange={handleChange}
                    name='test'
                    title='Running'
                    value='sneakers'
                />
                <Input
                    handleChange={handleChange}
                    name='test'
                    title='Sandals'
                    value='sandals'
                />
                <Input
                    handleChange={handleChange}
                    name='test'
                    title='Heels'
                    value='heels'
                />
                <Input
                    handleChange={handleChange}
                    name='test'
                    title='Heels'
                    value='heels'
                />
                <Input
                    handleChange={handleChange}
                    name='test'
                    title='Heels'
                    value='heels'
                />
                <Input
                    handleChange={handleChange}
                    name='test'
                    title='Flats'
                    value='flats'
                />
            </div>
        </div>
    )
}

export default Category
