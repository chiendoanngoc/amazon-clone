import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad'
          src='https://techcrunch.com/wp-content/uploads/2019/11/aws-reinvent-2019-banner.png'
        />

        <div>
          <h3>Hello {user? user.email : 'Guest'}</h3>

          <h2 className='checkout__title'>
            Your shopping Basket
          </h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}

        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
