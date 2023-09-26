
import React from 'react';
import './App.scss';

import Header from './Componenets/Header';
import HomeBanner from './Componenets/HomeBanner';


function App() {
  return (
    // React fragments have a smaller DOM, they render faster and use less memory
    <React.Fragment> 
      <Header/>
      <HomeBanner/>
    </React.Fragment>
      
     
    
  );
}

export default App;
