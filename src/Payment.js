import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        
        <h1>Checkout (<Link to='/checkout'>{basket?.length} {(basket?.length>1)? 'items' : 'item'}</Link>)</h1>
        
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>

          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>1 Dai Co Viet</p>
            <p>Hanoi, Viet Nam</p>
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>

          <div className='payment__items'>
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>

          <div className='payment__details'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
