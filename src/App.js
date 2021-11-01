import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // async componentDidMount() {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //   const json = await response.json();
  //   this.setState({monsters: json});
  // }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state; // const monsters = this.state.monsters
    const fileredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={fileredMonsters} />
      </div>
    );
  }
}

export default App;
/*
Props will be any par we pass in into 'element'
props.children anything passed between 'element'
if want console.log right after state, use second arg, as /consolelog
Arrow f-tion set this to context which it was given existence
*/
