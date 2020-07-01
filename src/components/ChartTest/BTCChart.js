import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const BTCChart = () => {
   const [chartData, setChartData] = useState({});

   const chart = () => {
      let date = [];
      let price = [];
      axios
         .get(
            'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=30m&limit=30'
         )
         .then(res => {
            console.log(res);
            for (let key in res.data) {
               let time = res.data[key][0];
               time = new Date(time).toLocaleTimeString('en-GB');
               date.push(time);
               price.push(res.data[key][1]);
            }
            setChartData({
               labels: date,
               datasets: [
                  {
                     label: 'BTCUSDT',
                     data: price,
                     borderWidth: 2,
                     backgroundColor: 'rgba(255, 0, 255, 0.5)'
                  }
               ]
            });
         })
         .catch(err => {
            console.log(err);
         });
      console.log(chartData);
   };

   useEffect(chart, []);
   return (
      <div className='App'>
         <div style={{ padding: 15, height: 1200, width: '90%' }}>
            <Line
               data={chartData}
               options={{
                  legend: { display: false },
                  responsive: true,
                  scales: {
                     yAxes: [
                        {
                           ticks: {
                              autoSkip: true,
                              maxTicksLimit: 2,
                              beginAtZero: false,
                              fontColor: 'white'
                           },
                           gridLines: {
                              display: false
                           }
                        }
                     ],
                     xAxes: [
                        {
                           ticks: {
                              display: false,
                              fontColor: 'white'
                           },
                           gridLines: {
                              display: false
                           }
                        }
                     ]
                  }
               }}
            ></Line>
         </div>
      </div>
   );
};

export default BTCChart;
