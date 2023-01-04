import './App.css'
import CardList from './Components/card-list/card-list'
import SeachBox from './Components/search-box/search-box'
import React, { useState, useEffect } from 'react'

export const App = () => {
  const [searchField, setSearhField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearhField(searchFieldString)
  }

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      (monster.name.toLocaleLowerCase().includes(searchField))
    )
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SeachBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
