import React, { Component } from 'react';

import NavBar from '../components/NavBar/NavBar';

import './MainPage.css';
import SmallBox from '../components/SmallBox/SmallBox';
import BigBox from '../components/BigBox/BigBox';
import TallBox from '../components/TallBox/TallBox';

export class MainPage extends Component {
   render() {
      return (
         <div className='mainPage'>
            <div className='mainContainer'>
               <NavBar />
               <div className='middleContainer'>
                  <div className='topMiddleContainer'>
                     <SmallBox />
                     <SmallBox />
                     <SmallBox />
                     <SmallBox />
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
