import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetData = ticker => {
   const [data, setData] = useState([]);

   const fetchData = async ticker => {
      const response = await axios.get(
         `https://api.binance.com/api/v3/ticker/${ticker}`
      );

      setData(response.data);
   };

   useEffect(() => {
      fetchData(ticker);

      setInterval(() => fetchData(ticker), 2500);
   }, [ticker]);

   return data;
};

export default useGetData;
