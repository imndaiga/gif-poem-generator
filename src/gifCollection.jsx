import React, { Component } from 'react'
import GifComponent from './GifComponent'

class GifCollection extends Component {

  render() {
    const GifArray = this.props.gifs.map(gif => <GifComponent gif={gif} key={gif}/>)
      return (
        <div>
        {GifArray.length < 1
          ?  "the gifs are loading"
          : <div>{GifArray}</div>
        }
        </div>
      )
  }
}

export default GifCollection
