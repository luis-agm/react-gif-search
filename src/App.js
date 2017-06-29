import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import './App.css';

class App extends Component {

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="greeting">
        <SearchBar onTermChange={this.handleTermChange}></SearchBar>
      </div>
    );
  }
}

export default App;
