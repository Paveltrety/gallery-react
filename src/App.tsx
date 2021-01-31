import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Album from './components/Album';
import Photos from './components/Photos';
import Start from './components/Start'



function App() {

  return (
  
    <div className="wrapper">
      <Users />
      <Route path='/' exact  component={Start} />
      <Route path='/user/:userId' exact  component={Album} />
      <Route path='/photos/:albumId' component={Photos} />

      </div>
  );
}

export default App;
