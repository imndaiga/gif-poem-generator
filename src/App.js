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

  toggleListenAndFetchGifs = () => {
    this.setState({
      listening: !this.state.listening
    }, () => this.handleListen())
    return (
    this.fetchRandomGif(),
    this.fetchRandomGif(),
    this.fetchRandomGif())
  }


  handleListen() {
    if (this.state.listening) {
      let poem = []
      recognition.start()
      // recognition.onend = () => recognition.start()
      recognition.onresult = event => {
        poem.push(event.results[0][0].transcript.toString())
        this.setState({
          capturedPoem: poem
        })
      }
    } else {
      recognition.end()
    }
    console.log("captured poem:", this.state.capturedPoem)
  }


  render() {
    console.log(this.state.listening);
    return (
      <React.Fragment>
        <Route exact path="/" component={() => <WelcomePage />} />
        <Route path="/instructions" component={() => <InstructionsPage toggleListenAndFetchGifs={this.toggleListenAndFetchGifs} />} />
        <Route path="/gifs" component={() => <GifPage gifs={this.state.gifs} toggleListenAndFetchGifs={this.toggleListenAndFetchGifs} />} />
        <Route path="/results" component={() => <ResultsPage />} />
      </React.Fragment>
    );
  }
}

export default App;
