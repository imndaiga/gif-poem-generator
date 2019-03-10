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
