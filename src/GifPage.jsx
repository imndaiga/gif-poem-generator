import React from 'react'
import GifCollection from './GifCollection'
import { Link } from 'react-router-dom'


class GifPage extends React.Component {
  render() {
    return(
      <React.Fragment>
        <GifCollection
          gifs={this.props.gifs} />
        <button><Link to ="/results" onClick={() => this.props.toggleListen()}>Finished!</Link></button>
      </React.Fragment>
    )
  }
}


export default GifPage
