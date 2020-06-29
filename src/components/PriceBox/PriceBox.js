import React from 'react';

import './PriceBox.css';

import useGetData from '../../useGetData';

const PriceBox = ({ ticker }) => {
   // Get price and convert to right format
   let currentData = useGetData(`price?symbol=${ticker}`);
   let currentPrice = currentData.price;
   currentPrice = currentPrice ? currentPrice.slice(0, -6) : '';

   // Get 24H change percentage
   let x = useGetData(`24hr?symbol=${ticker}`);
   let currentPercent = x.priceChangePercent;
   currentPercent = currentPercent ? currentPercent.slice(0, -1) : '';

   return (
      <div className='SmallContainer'>
         <div className='ticker'>
            {ticker.substr(0, 3) + '/' + ticker.substr(3)}
            <div>
               <div className='price negative'>
                  {currentPrice}
                  <span className='percent negative'>{`${currentPercent}%`}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PriceBox;
