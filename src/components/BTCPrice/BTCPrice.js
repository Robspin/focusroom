import React from 'react';

import './BTCPrice.css';

const BTCPrice = () => {
   return (
      <div className='SmallContainer'>
         <div className='ticker'>
            BTC/USDT{' '}
            <div>
               <div className='price positive'>
                  9001.01
                  <span className='percent positive'>1.2%</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BTCPrice;
