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
    capturedPoem: []
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
    let poem = []
    if (this.state.listening) {
      recognition.onstart = () => {console.log("listening!")}
      recognition.start()
      recognition.onend = () => recognition.start()
      recognition.onresult = event => {
        poem.push(event.results[0][0].transcript)
      }
    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("stopped listening!")
      }
    }

    this.setState({
      capturedPoem: poem
    })
    console.log("check stored poem in state:", this.state.capturedPoem)
  }

  endListening = () => {
    this.setState({
      listening: false
    }, () => this.handleListen())
  }


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={() => <WelcomePage />} />
        <Route path="/instructions" component={() => <InstructionsPage toggleListenOnAndFetchGifs={this.toggleListenOnAndFetchGifs} />} />
        <Route path="/gifs" component={() => <GifPage gifs={this.state.gifs} endListening={this.endListening} />} />
        <Route path="/results" component={() => <ResultsPage results={this.state.capturedPoem} />} />
      </React.Fragment>
    );
  }
}

export default App;
