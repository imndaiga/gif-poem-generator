import React, { Component } from 'react';
import './App.css';
import GifCollection from './GifCollection'
import ButtonComponent from './ButtonComponent'

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

  handleClick = () => {
    return (this.fetchRandomGif(),
            this.fetchRandomGif(),
            this.fetchRandomGif())
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <GifCollection
            gifs={this.state.gifs} />
          <ButtonComponent handleClick={this.handleClick}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

// Welcome text
// Welcome to the most wonderfully bizarre poem generator on the web.
// Literature for the meme generation, putting the AI in haiku.

// Welcome button text = "Instructions"
//
// Instructions text
// We are going to show you three GIFs.
// Your job is to describe each one as concisely and poetically as possible.
// Make sure you remember to take a small break (just a second will do) between each one.
// Then, we'll display the poem back to you.
// Voila!

// Instructions button text = "Ready? GO!"
//
// GIF display button text = "Finish"
//
// Results text
// Your poem:
//
//
// Results button text = "Start again!"
