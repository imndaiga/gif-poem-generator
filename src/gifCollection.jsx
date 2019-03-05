import React, { Component } from 'react'
import GifComponent from './GifComponent'

class GifCollection extends Component {

  render() {
    const GifArray = this.props.gifs.map(gif => <GifComponent gif={gif} key={gif}/>)
      return (
        <div>
        {GifArray.length < 1
          ?  "click the button to load your GIFs!"
          : <div>{GifArray}</div>
        }
        </div>
      )
  }
}

export default GifCollection
