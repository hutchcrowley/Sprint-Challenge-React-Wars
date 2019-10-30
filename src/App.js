/* eslint-disable no-unused-vars */
import React from 'react';
import DropDown from './components/DropDown';
import PersonCard from '../src/components/PersonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const App = () =>
{
  return (
    <div className='App'>
      <DropDown />
      <h1>Star Wars API:</h1>
      <h2>The People of Star Wars!</h2>
      <PersonCard />
    </div>
  );
}

export default App
