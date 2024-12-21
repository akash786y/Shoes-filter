import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <div>
      <section className="card">
        <img className='card-img'
          src={img} alt={title} />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star}{star}{star}
            <span className="total-revies">{reviews}</span>
          </section>
          <section className="card-price">

            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>

            <div className="bag">
              <BsFillBagHeartFill />
            </div>

          </section>
        </div>
      </section>
    </div>
  )
}

export default Card