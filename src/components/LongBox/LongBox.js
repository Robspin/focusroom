import React from 'react';

import './LongBox.css';

// const d = new Date();
// const n = () => d.toLocaleTimeString();

class LongBox extends React.Component {
   constructor() {
      super();
      this.state = {
         time: new Date()
      };
   }

   componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
   }

   componentWillUnmount() {
      clearInterval(this.timerID);
   }

   tick() {
      this.setState({
         time: new Date()
      });
   }

   render() {
      return (
         <div className='longContainer'>
            <div className='timeContainer'>
               <div className='white city'>
                  Amsterdam: <span>{this.state.time.toLocaleTimeString()}</span>
               </div>
               <div className='white city'>
                  Tokyo: <span>15:33:22</span>
               </div>
               <div className='white city'>
                  New York:
                  <span>
                     {this.state.time.toLocaleString({
                        timeZone: 'America/New_York'
                     })}
                  </span>
               </div>
            </div>
         </div>
      );
   }
}

export default LongBox;
