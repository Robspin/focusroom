import React from 'react';
import Typical from 'react-typical';

import './NavBar.css';

const name = 'Robin';

const NavBar = () => {
   return (
      <div className='navContainer'>
         <h4 className='greeting white'>
            <Typical
               steps={[
                  `Hello ${name ? name : 'guest'}`,
                  5000,
                  'Ready to Conquer?',
                  5000,
                  `Enjoy your stay`
               ]}
            ></Typical>
         </h4>
         <ul>
            <li>login</li>
            <li>register</li>
            <li>trades</li>
            <li>strategy</li>
            <li>portfolio</li>
            <li>settings</li>
         </ul>
      </div>
   );
};

export default NavBar;
