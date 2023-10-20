import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'
function Card({img,title,star,reviews,prevPrice,newPrice,company,color,category}) {
  return (
  <>
    <section className="card">
          <img src={img} className='card-img' alt="Shoe" />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
              {star} {star} {star} {star}
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del>
                <div>${newPrice}</div>
              </div>
              <div className="bag-icon">
                <BsFillBagHeartFill />
              </div>
            </section>
          </div>
        </section>
  </>
  )
}

export default Card