import React, { Component } from 'react';
import './App.css';
import GifList from './components/GifList'
import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer'

class App extends Component {
  constructor(){
    super();

    this.state = {
      videos: [],
      selectedVideoId: null
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.selectAVideo = this.selectAVideo.bind(this);
    this.resetSelectedVideoId = this.resetSelectedVideoId.bind(this);
  }

  handleTermChange(term){
    fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=${term}&type=''&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then(response => response.json())
      .then((response) => this.setState({ videos: response.items}))
      .catch((err) => console.log(err));
  }

  selectAVideo(videoId){
    this.setState({selectedVideoId: videoId});
  }

  resetSelectedVideoId(){
    this.setState({selectedVideoId: null})
  }

  render() {

    if (this.state.selectedVideoId){
      const selectedVideo = this.state.videos.find(video => this.state.selectedVideoId === video.id.videoId)
      return (
        <div>
          <VideoPlayer video={selectedVideo} />
          <button onClick={this.resetSelectedVideoId}>Back</button>
        </div>
      )

    } else {
      return (
        <div>
          <SearchBar onTermChange={this.handleTermChange} />
          <GifList videos={this.state.videos} selectAVideo={this.selectAVideo} />
        </div>
      );
    }
    
  }
}

export default App;
