import User from "./User";
import UserClass from "./UserClass";
import React from "react";
//Converted to CB to understand Lifecylce 

class About extends React.Component{
    constructor(){
        super()
        console.log('Parent Constructor')
    }
    componentDidMount(){
        console.log('Parent Did Mount')
    }
    render(){
        console.log('Parent Render')
        return(
            <div>
                <h1>About Us Page</h1>
                <h2>This is about us page of our app</h2>
                <User />
                <UserClass />
            </div>
        )
    }
}

// const About=()=>{
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <h2>This is about us page of our app</h2>
//             <User name={"Aniket Deshmukh(Functional)"}/>
//             <UserClass name={"Aniket Deshmukh(Class)"} location={"Pune"}/>
//         </div>
//     )
// }

export default About;