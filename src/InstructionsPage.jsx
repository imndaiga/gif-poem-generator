import React from 'react'
import { Link } from 'react-router-dom'

class InstructionsPage extends React.Component {
  render() {
    return(
      <div className="page" id="instructions">
        <p>We are going to show you three GIFs.</p>
        <p>Your job is to describe each one as concisely and poetically as possible.</p>
        <p>Make sure you remember to take a small break (just a second will do) between each one.</p>
        <p>Then, we'll display the poem back to you.</p>
        <p>Voila!</p>
        <button><Link to ="/gifs" onClick={() => this.props.toggleListenOnAndFetchGifs()}>Begin!</Link></button>
      </div>
    )
  }
}


export default InstructionsPage
