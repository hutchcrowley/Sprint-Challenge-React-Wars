/* eslint-disable no-unused-vars */
import React from 'react';
import DropDown from './components/DropDown';
import PersonList from '../src/components/PersonList';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () =>
{
  return (
    <div className='App'>
      <DropDown />
      <h1>Star Wars API:</h1>
      <h2>The People of Star Wars!</h2>
      <PersonList />
    </div>
  );
}

export default App
