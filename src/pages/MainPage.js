import React, { Component } from 'react';

import NavBar from '../components/NavBar/NavBar';

import './MainPage.css';
import SmallBox from '../components/SmallBox/SmallBox';
import BTCPrice from '../components/BTCPrice/BTCPrice';
import BigBox from '../components/BigBox/BigBox';
import TallBox from '../components/TallBox/TallBox';
import TimeBox from '../components/TimeBox/TimeBox';

export class MainPage extends Component {
   render() {
      return (
         <div className='mainPage'>
            <div className='mainContainer'>
               <NavBar />
               <div className='middleContainer'>
                  <div className='topMiddleContainer'>
                     <BTCPrice />
                     <SmallBox />
                     <TimeBox />
                  </div>
                  <BigBox />
               </div>
               <TallBox />
            </div>
         </div>
      );
   }
}

export default MainPage;
