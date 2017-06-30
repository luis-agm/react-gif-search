import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
import GifModal from './components/GifModal'
import request from 'axios'
import './App.css';
import './styles/main.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      apiKey: 'd73a858d4880465c9dcef78ebf1479eb',
      selectedGif: null,
      modalIsOpen: false
    }
  }

  toggleModal(gif) {
      if(gif){
        this.setState({
          modalIsOpen: true,
          selectedGif: gif
        });
      } else {
        this.setState({
          modalIsOpen: false,
          selectedGif: null
        });
      }
  }

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${this.state.apiKey}`;

    request.get(url)
      .then((res)=>{            
        console.log(res.data.data[0]);
        this.setState({gifs: res.data.data})
      });
  }

  render() {
    return (
      <div className="app">
        <SearchBar onTermChange={this.handleTermChange}></SearchBar>
        <GifList gifs={this.state.gifs}
                 onGifSelect={(selectedGif) => this.toggleModal(selectedGif) }/>
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selectedGif={this.state.selectedGif}
                  onRequestClose={ () => this.toggleModal() } />
      </div>
    );
  }
}

export default App;
