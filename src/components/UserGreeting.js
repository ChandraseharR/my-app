import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
    //Mostly conditional or short-circuit is used!


    //Conditional or ternary Operator
    // return(
    //     this.state.isLoggedIn?<div>Welcome Chandru</div>:<div>Welcome Guest</div>
    // )
    
    //short-circuit operator
    return this.state.isLoggedIn && <div>Welcome Chandru</div>

    //element Variable
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Chandru</div>
    // }else{
    //     message=<div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    //If-else approach
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>Welcome Chandru</div>
    //     )
    // }
    // else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome Chandru</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
