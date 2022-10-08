import React, { Component } from 'react';

// class Welcome extends Component {
//     render(){
//         return <h1>Welcome {this.props.name} {this.props.surname}</h1>
//     }
// }
//Destructuring props and state
class Welcome extends Component {
    render(){
        const {name,surname}=this.props
        // const {state1,state2} = this.state
        return <h1>Welcome {name} {surname}</h1>
    }
}


export default Welcome