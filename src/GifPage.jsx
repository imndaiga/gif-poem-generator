import React from 'react'
import GifCollection from './GifCollection'
import { Link } from 'react-router-dom'


class GifPage extends React.Component {
  render() {
    return(
      <React.Fragment>
        <GifCollection
          gifs={this.props.gifs} />
        <Link className="nav" to="/results" onClick={() => this.props.endListening()}>Finished!</Link>
      </React.Fragment>
    )
  }
}


export default GifPage
