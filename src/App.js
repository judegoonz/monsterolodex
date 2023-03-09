import { Component } from 'react';
import CardList from './Components/Card-list/Card-list';
import SearchBox from './Components/Search-box/Search-box';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => this.setState({ monsters: users }));

  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
      this.setState(
        () => {
        return { searchField };
      });
  }
    
  
  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => { 
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

  return (
      <div className="App">
        <h1 className='app-title'> Monsters Rolodex </h1>
        <SearchBox 
        className='monster-search box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
