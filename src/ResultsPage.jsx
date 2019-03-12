import React from 'react'
import { Link } from 'react-router-dom'

class ResultsPage extends React.Component {
  render() {
    console.log("this.props.results", this.props.results);
    return(
      <div className="page" id="results">
        <p>Your poem: {this.props.results ? this.props.results: "...isn't here yet."}</p>
        <Link className="nav" to="/">Wonderful. Another go?</Link>
      </div>
    )
  }
}


export default ResultsPage
