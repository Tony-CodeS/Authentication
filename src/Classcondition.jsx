import React, { Component } from 'react'

 class Classcondition extends Component {
constructor(props) {
  super(props)

  this.state = {
    Isloggedin: true
  }
}



  render() {
    return this.state.Isloggedin ?( 
      <div> Welcome Anthony</div>
    ):( 
        <div> Welcome Guest</div>
    )
  }
}

export default Classcondition;