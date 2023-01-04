import { Component } from 'react'
import './App.css'
import CardList from './Components/card-list/card-list'
import SeachBox from './Components/search-box/search-box'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => ({ monsters: users })))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(() => ({ searchField }))
  }

  filterMonsters(monsters, searchField) {
    return monsters.filter(monter => (
      monter.name.toLocaleLowerCase().includes(searchField)
    ))
  }

  render() {
    const { monsters, searchField } = this.state
    const { filterMonsters, onSearchChange } = this

    const filteredMonsters = filterMonsters(monsters, searchField)

    return (
      <div className="App">
        <SeachBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
