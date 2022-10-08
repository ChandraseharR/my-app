import  React from 'react'

// Function
// function Greet(){
//     return <h1>Hello People!!</h1>
// }

//props
// const Greet = (props) => {
//     return (
//     <div>    
//         <h1>Hello {props.name} {props.surname}</h1>
//         {props.children}
//     </div>    
//     )
// }

//Destructuring props 1
const Greet = props => {
    const {name, surname} = props
    return (
    <div>    
        <h1>Hello {name} {surname}</h1>
        {/* {props.children} */}
    </div>    
    )
}


//Destructuring props 2
// const Greet = ({name,surname}) => {
//     return (
//     <div>    
//         <h1>Hello {name} {surname}</h1>
//         {/* {props.children} */}
//     </div>    
//     )
// }

export default Greet