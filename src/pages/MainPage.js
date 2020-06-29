import React, { Component } from 'react';

import NavBar from '../components/NavBar/NavBar';

import './MainPage.css';
import PriceBox from '../components/PriceBox/PriceBox';
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
                     <PriceBox ticker='BTCUSDT' />
                     <PriceBox ticker='TRXBTC' />
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
