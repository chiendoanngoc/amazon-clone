import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
        
        <div className='home__row'>
          <Product 
            id={1}
            title='DualSense Wireless Controller'
            price={69.98}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg'
          />
          <Product 
            id={2}
            title='DualSense Wireless Controller'
            price={69.98}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product 
            id={3}
            title='DualSense Wireless Controller'
            price={69.98}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg'
          />
          <Product 
            id={4}
            title='DualSense Wireless Controller'
            price={69.98}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg'
          />
          <Product 
            id={5}
            title='DualSense Wireless Controller'
            price={69.98}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product 
            id={6}
            title='DualSense Wireless Controller'
            price={69.98}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg'
          />
        </div>

      </div>
    </div>
  )
}

export default Home
