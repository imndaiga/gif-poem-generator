import React from 'react'
import { Link } from 'react-router-dom'

class ResultsPage extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div>
          Your poem:
        </div>
        <button><Link to ="/">Wonderful. Another go?</Link></button>
      </React.Fragment>
    )
  }
}


export default ResultsPage
