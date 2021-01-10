import React from 'react';
import './Subtotal.css';
import {useStateValue} from './StateProvider';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history = useHistory();
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

      <button onClick={() => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
