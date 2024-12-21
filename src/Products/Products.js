import React from 'react'
import './Products.css'

function Products({result}) {
  return (
      <div>
        <section className='card-container'>
          {result}
          {result}
          {result}
          {result}
          {result}
        </section>
      </div>
  );
}

export default Products