import React from 'react'

class ButtonComponent extends React.Component {

// const buttonInnerText

  render() {
    console.log(this)
    return (
      <button id="button" onClick={this.props.handleClick}>CLICK IT</button>
    )
  }
}

export default ButtonComponent
