import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
import request from 'axios'
import './App.css';

class App extends Component {
  constructor() {
        super();

        this.state = {
            gifs: [],
            apiKey: 'd73a858d4880465c9dcef78ebf1479eb'
        }
        this.handleTermChange = this.handleTermChange.bind(this)
    }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${this.state.apiKey}`;

        request.get(url)
          .then((res)=>{
            console.log(res.data.data[0]);
          });
  }

  render() {
    return (
      <div className="greeting">
        <SearchBar onTermChange={this.handleTermChange}></SearchBar>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
