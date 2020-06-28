import React from 'react';

import './BTCPrice.css';

import useGetData from '../../useGetData';

const BTCPrice = () => {
   // Get BTC price and convert to right format
   let currentData = useGetData('price?symbol=BTCUSDT');
   let currentPrice = currentData.price;
   currentPrice = currentPrice ? currentPrice.slice(0, -6) : '';

   // Get BTC 24H change
   let x = useGetData('24hr?symbol=BTCUSDT');
   let currentPercent = x.priceChangePercent;
   currentPercent = currentPercent ? currentPercent.slice(0, -1) : '';
   console.log(currentPercent);

   return (
      <div className='SmallContainer'>
         <div className='ticker'>
            BTC/USDT{' '}
            <div>
               <div className='price positive'>
                  {currentPrice}
                  <span className='percent negative'>{`${currentPercent}%`}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BTCPrice;
