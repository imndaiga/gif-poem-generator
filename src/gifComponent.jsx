import React from 'react'

class GifComponent extends React.Component {

  render() {
    return (
      <div>
        <img src={this.props.gif} alt="random gif yoooo"/>
      </div>
    )
  }

}

export default GifComponent
