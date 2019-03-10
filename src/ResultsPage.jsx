import React from 'react'
import { Link } from 'react-router-dom'

class ResultsPage extends React.Component {
  render() {
    console.log("this.props.results", this.props.results);
    return(
      <React.Fragment>
        <div>
          Your poem:
          {this.props.results ? this.props.results.join(" ") : "...isn't here yet."}
        </div>
        <button><Link to ="/">Wonderful. Another go?</Link></button>
      </React.Fragment>
    )
  }
}


export default ResultsPage
