import React, { useState, useEffect } from 'react';

import './TimeBox.css';

const TimeBox = () => {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      let interval = null;
      interval = setInterval(() => setTime(new Date()), 1000);

      return () => clearInterval(interval);
   }, [time]);

   return (
      <div className='longContainer'>
         <div className='timeContainer'>
            <div className='white city'>
               Amsterdam:
               <span className='positive'>
                  {time.toLocaleTimeString('en-GB', {
                     timeZone: 'Europe/Amsterdam'
                  })}
               </span>
            </div>
            <div className='white city'>
               Tokyo:
               <span className='positive'>
                  {time.toLocaleTimeString('en-GB', {
                     timeZone: 'Asia/Tokyo'
                  })}
               </span>
            </div>
            <div className='white city'>
               New York:
               <span className='positive'>
                  {time.toLocaleTimeString('en-GB', {
                     timeZone: 'America/New_York'
                  })}
               </span>
            </div>
         </div>
      </div>
   );
};

export default TimeBox;
