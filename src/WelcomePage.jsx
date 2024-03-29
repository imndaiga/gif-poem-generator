import React from 'react'
import { Link } from 'react-router-dom'

class WelcomePage extends React.Component {
  render() {
    return(
      <div className="page" id="welcome">
        <h2>Welcome to the most wonderfully bizarre poem generator on the web.</h2>
        <h3>Literature for the meme generation: putting the AI in haiku.</h3>
        <Link className="nav" to="/instructions">Instructions</Link>
      </div>
    )
  }
}


export default WelcomePage
