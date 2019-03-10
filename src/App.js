import React, { Component } from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import InstructionsPage from './InstructionsPage'
import GifPage from './GifPage'
import ResultsPage from './ResultsPage'

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
const recognition = new window.SpeechRecognition()

recognition.continous = true
recognition.lang = 'en-US'


class App extends Component {

  state = {
    gifs: [],
    listening: false,
    capturedPoem: ""
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

  handleGetGifsClick = () => {
    this.setState({
      gifs: [],
      listening: true
    })
    return (
    this.handleListen(),
    this.fetchRandomGif(),
    this.fetchRandomGif(),
    this.fetchRandomGif())
  }


  handleListen() {
    if (this.state.listening) {
      recognition.start()
      recognition.onresult = function(event) {
        let poem = event.results[0][0].transcript
        this.setState({
          capturedPoem: poem
        })
      }
    } else {
      console.log("not listeninggggg")
    }
    console.log("captured poem", this.state.capturedPoem)
  }


  toggleListen = () => {
    this.setState({
      listening: !this.state.listening
    })
  }





  render() {
    console.log(this.state.listening);
    return (
      <React.Fragment>
        <Route exact path="/" component={() => <WelcomePage />} />
        <Route path="/instructions" component={() => <InstructionsPage handleGetGifsClick={this.handleGetGifsClick} />} />
        <Route path="/gifs" component={() => <GifPage gifs={this.state.gifs} toggleListen={this.toggleListen} />} />
        <Route path="/results" component={() => <ResultsPage />} />
      </React.Fragment>
    );
  }
}

export default App;
