import React, { Component } from 'react';
import './App.css';
import GifCollection from './GifCollection'

class App extends Component {

  state = {
    gifs: [],
  }

  fetchRandomGif = () => {
    const apiEndpoint = `https://api.giphy.com/v1/gifs/random`
    const key = `1m9nu8Db8mkVi6w1H3eRiyTSc04gEUgJ`
    const fetchURL = `${apiEndpoint}?api_key=${key}`
    fetch(fetchURL)
      .then(resp => resp.json())
      .then(returnedGif => this.setState({
        gifs: [...this.state.gifs, returnedGif.data.fixed_height_downsampled_url]
      }))
  }

  componentDidMount() {
    return (this.fetchRandomGif(),
            this.fetchRandomGif(),
            this.fetchRandomGif())
  }

  render() {
    return (
      <div className="App">
        <GifCollection
          gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
