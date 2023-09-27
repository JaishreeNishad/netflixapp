
import React from 'react';
import './App.scss';

import Header from './Componenets/Header';
import HomeBanner from './Componenets/HomeBanner';
import Login from './Componenets/Login';


function App() {
  return (
    
    <React.Fragment> 
      <Header/>
      <HomeBanner/>
      <Login/>
    </React.Fragment>
      
     
    
  );
}

export default App;
