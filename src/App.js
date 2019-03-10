import React, { Component } from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import InstructionsPage from './InstructionsPage'
import GifPage from './GifPage'
import ResultsPage from './ResultsPage'


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


  handleWelcomeButtonClick = () => {
    //push the browser to "/instructions"
    console.log("u hit the welcome button!")
  }

  handleInstructionsButtonClick = () => {
    //push the browser to "/gifs"
  }

  handleGetGifsClick = () => {
    this.setState({ gifs: []})
    return (this.fetchRandomGif(),
    this.fetchRandomGif(),
    this.fetchRandomGif())
  }

  handleResultsButtonClick = () => {
    //push the browser to "/"
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={() => <WelcomePage handleClick={this.handleWelcomeButtonClick} />} />
        <Route path="/instructions" component={() => <InstructionsPage handleClick={this.handleInstructionsButtonClick} />} />
        <Route path="/gifs" component={() => <GifPage gifs={this.state.gifs} handleClick={this.handleGetGifsClick} />} />
        <Route path="/results" component={() => <ResultsPage handleClick={this.handleResultsButtonClick} />} />
      </React.Fragment>
    );
  }
}

export default App;


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
