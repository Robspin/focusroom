import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './pages/MainPage';

const App = () => {
   return (
      <div>
         <MainPage />
      </div>
   );
};

ReactDOM.render(<App />, document.getElementById('root'));
