import React from 'react';
import './Subtotal.css';
import {useStateValue} from './StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();

  function totalPrice(basket) {
    let sum = 0;
    basket.forEach(element => {
      sum += element.price;
    });
    return sum;
  }

  return (
    <div className='subtotal'>
      <p className='subtotal_info'>
        Subtotal ({basket?.length} items): <strong>{totalPrice(basket)}$</strong>
      </p>

      <small className='subtotal__gift'>
        <input type='checkbox' /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
