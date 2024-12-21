import React from 'react'
import './Recommended.css'
import Button from '../components/Buttons'

function Recommended({ handleClick }) {

  return (
    <div>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value='' title='All Products' />
          <Button onClickHandler={handleClick} value='Nike' title='Nike' />
          <Button onClickHandler={handleClick} value='Adidas' title='Adidas' />
          <Button onClickHandler={handleClick} value='Puma' title='Puma' />
          <Button onClickHandler={handleClick} value='Reebok' title='Reebok' />
        </div>
      </div>
    </div>
  )
}

export default Recommended