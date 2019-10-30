import React from 'react'
import DropDown from '../src/components/DropDown'
import PersonList from '../src/components/PersonList'
import './styles.css'

const App = () => {
  return (
    <div className="App">
      <DropDown />
      <h1>Star Wars API:</h1>
      <h2>The People of Star Wars!</h2>
      <PersonList />
    </div>
  )
}

export default App
