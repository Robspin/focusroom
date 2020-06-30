import React from 'react';

import './PriceBox.css';

import useGetData from '../../useGetData';

const PriceBox = ({ ticker }) => {
   // Get price and convert to right format
   let currentData = useGetData(`price?symbol=${ticker}`);
   let currentPrice = currentData.price;
   if (ticker.includes('USDT')) {
      currentPrice = currentPrice ? currentPrice.slice(0, -6) : '';
   } else {
      currentPrice = currentPrice ? currentPrice.split('.')[1] - 0 : '';
   }

   // Get 24H change percentage
   let x = useGetData(`24hr?symbol=${ticker}`);
   let currentPercent = x.priceChangePercent;
   currentPercent = currentPercent ? currentPercent.slice(0, -1) : '';

   return (
      <div className='SmallContainer'>
         <div className='ticker'>
            {ticker.substr(0, 3) + '/' + ticker.substr(3)}
            <div>
               <div className='price positive'>
                  {currentPrice}
                  <span
                     className={
                        currentPercent < 0
                           ? 'percent negative'
                           : 'percent positive'
                     }
                  >{`${currentPercent}%`}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PriceBox;
