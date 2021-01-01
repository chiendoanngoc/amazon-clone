import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad'
          src='https://techcrunch.com/wp-content/uploads/2019/11/aws-reinvent-2019-banner.png'
        />

        <div>
          <h2 className='checkout__title'>
            Your shopping Basket
          </h2>

          {/* BasketItem */}

        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
