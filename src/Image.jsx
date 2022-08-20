import React, { Component } from 'react'
import Mage from "./navbar-image.jpg"

class Image extends Component {
  render() {
    return (
      <div>
        <img src={Mage} alt = "xxxx"></img>
      </div>
    )
  }
}

export default Image