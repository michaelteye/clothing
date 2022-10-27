import React from 'react'
import Header from '../components/Header'
import Footer from '../layout/Footer'
import ProductL from '../assets/images/product-large.jpg'
import ProductS from '../assets/images/product-small.jpg'
import heart from '../assets/icons/png/heart-outline.png'
import shop from '../assets/icons/png/shopping-cart-white.png'


export default function Product(){
  return (
    <div>
        <Header></Header>
        <div className="description">
      <div class="description__images">
        <img
          src={ProductL}
          alt=""
          className="description__images--big"
        />
        <div className="description__images--smalls">
          <img
            src={ProductS}
            alt=""
            className="description__images--smalls--small--active"
          />
          <img
            src={ProductS}
            alt=""
            className="description__images--smalls--small--notActive"
          />
          <img
            src={ProductS}
            alt=""
            className="description__images--smalls--small--notActive"
          />
          <img
            src={ProductS}
            alt=""
            className="description__images--smalls--small--notActive"
          />
          <img
            src={ProductS}
            alt=""
            className="description__images--smalls--small--notActive"
          />
          <img
            src={ProductS}
            alt=""
            className="description__images--smalls--small--notActive"
          />
        </div>
      </div>

      <div className="description__text">
        <div className="description__text--top">
          <div className="description__text--top--heading">
            Manchester United 21-22 Home Shirt
          </div>
          <div className="description__text--top--pricing">
            <div className="description__text--top--pricing--main">&euro;30.00</div>
            <div className="description__text--top--pricing--discount">
              &euro;89.95
            </div>
            <div className="description__text--top--pricing--save">Save 67%</div>
            <div className="description__text--top--pricing--favorites">
              <img src={heart} alt="heart-outline" class="description__text--top--pricing--favorites--icon"/>
              <div className="description__text--top--pricing--favorites--text">
                Add to favourites
              </div>
            </div>
          </div>
        </div>

        <div className="description__text--second">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ratione
          dolores alias quibusdam blanditiis explicabo nihil ipsam numquam iste
          doloribus expedita voluptates est corporis eius quam tempore odio
          suscipit qui nobis autem, debitis vitae? Molestiae, sit mollitia enim
          deleniti impedit, tempore at minima veritatis dignissimos quod iste,
          incidunt ipsam. <strong><u>Read More</u></strong>
        </div>

        <div className="description__text--input">
          <div className="description__text--input--field">
            <div className="description__text--input--field--label">
              Size
              <span class="description__text--input--field--label--star"
                >*</span
              >
            </div>
            <input
              type="text"
              className="description__text--input--field--form"
              placeholder="Select a shirt size"
            />
            <div className="description__text--input--field--chart">
              View Size Chart
            </div>
          </div>

          <div className="description__text--input--field">
            <div className="description__text--input--field--label">Name</div>
            <input
              type="text"
              className="description__text--input--field--form"
              placeholder="What name would you want in the shirt?"
            />
          </div>

          <div className="description__text--input--field">
            <div className="description__text--input--field--label">
              Number on shirt
            </div>
            <input
              type="text"
              className="description__text--input--field--form"
              placeholder="Enter a number between 0 and 99?"
            />
          </div>

          <div className="description__text--input--field">
            <div className="description__text--input--field--label">Patch</div>
            <input
              type="text"
              className="description__text--input--field--form"
              placeholder="Select a patch"
            />
          </div>

          <div className="description__text--input--field">
            <div className="description__text--input--field--label">Qty</div>
            <input
              type="number"
              className="description__text--input--field--form"
              placeholder="1"
            />
          </div>
        </div>

       
        <div className="description__cart">
          <div className="description__cart--text">Add to Cart</div>
          <img
            src={shop}
            alt="shopping-cart-white"
            className="description__cart--icon"
          />
        </div>
      </div>
    </div>
    <Footer></Footer>


    </div>
  )
}
