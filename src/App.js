import React, { Component } from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import InstructionsPage from './InstructionsPage'
import GifPage from './GifPage'
import ResultsPage from './ResultsPage'
import { BrowserRouter as Router } from 'react-router-dom'

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
    const apiEndpoint = `${process.env.REACT_APP_GIPHY_API_ENDPOINT}`
    const key = `${process.env.REACT_APP_GIPHY_API_KEY}`
    const fetchURL = `${apiEndpoint}?api_key=${key}`
    fetch(fetchURL)
      .then(resp => resp.json())
      .then(returnedGif => this.setState({
        gifs: [...this.state.gifs, returnedGif.data.fixed_height_downsampled_url]
      }))
  }

  toggleListenOnAndFetchGifs = () => {
    this.setState({
      listening: true
    }, () => this.handleListen())
    return (
    this.fetchRandomGif(),
    this.fetchRandomGif(),
    this.fetchRandomGif())
  }

  handleListen = () => {
    let poem = ''
    if (this.state.listening) {
      recognition.onstart = () => {console.log("listening!")}
      recognition.start()
      recognition.onend = () => recognition.start()
      recognition.onresult = event => {
        poem = event.results[0][0].transcript
        this.setState({
          capturedPoem: poem
        })
        console.log("check stored poem in state:", this.state.capturedPoem)
      }
    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("stopped listening!")
      }
    }
  }

  endListening = () => {
    this.setState({
      listening: false
    }, () => this.handleListen())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={() => <WelcomePage />} />
          <Route path="/instructions" component={() => <InstructionsPage toggleListenOnAndFetchGifs={this.toggleListenOnAndFetchGifs} />} />
          <Route path="/gifs" component={() => <GifPage gifs={this.state.gifs} endListening={this.endListening} />} />
          <Route path="/results" component={() => <ResultsPage results={this.state.capturedPoem} />} />
        </div>
      </Router>
    );
  }
}

export default App;
