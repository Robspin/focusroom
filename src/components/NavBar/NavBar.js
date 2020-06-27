import React from 'react';

import './NavBar.css';

let i = 0;
let greet = '';

const greeting = text => {
   const string = text ? `Hello ${text}` : `Hello guest`;
   console.log(string);
   if (i < string.length) {
      greet += `${string.charAt(i)}`;
      console.log(greet);
      i++;
   }
   return greet;
};

// greeting();

const NavBar = () => {
   return (
      <div className='navContainer'>
         <h4 className='greeting white'>Hello guest</h4>
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
