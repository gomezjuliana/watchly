import React, { Component } from 'react';
import './App.css';
import GifList from './components/GifList.js'
import SearchBar from './components/SearchBar.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      videos: []
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term){
    fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=${term}&type=''&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then(response => response.json())
      .then((response) => this.setState({ videos: response.items}))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
