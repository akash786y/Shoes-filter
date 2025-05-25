import React from 'react'
import './Colors.css'
import Input from '../../components/Input'

function Colors({ handleChange }) {
  return (
    <div>

      <h2 className='sidebar-tite'>Colour</h2>

      <div>
        <Input
          handleChange={handleChange}
          value='red'
          title='Red'
          name='test3'
        />
        <Input
          handleChange={handleChange}
          value='black'
          title='Black'
          name='test22'
        />
        <Input
          handleChange={handleChange}
          value='black'
          title='Black'
          name='test66'
        />
        <Input
          handleChange={handleChange}
          value='black'
          title='Black'
          name='test44'
        />
        <Input
          handleChange={handleChange}
          value='blue'
          title='Blue'
          name='test3'
        />
        <Input
          handleChange={handleChange}
          value='white'
          title='White'
          name='test3'
        />
      </div>
    </div>
  )
}

export default Colors
