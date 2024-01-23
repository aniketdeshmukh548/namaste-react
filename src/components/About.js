import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
//Converted to CB to understand Lifecylce 

// class About extends React.Component{
//     constructor(){
//         super()
//         console.log('Parent Constructor')
//     }
//     componentDidMount(){
//         console.log('Parent Did Mount')
//     }
//     render(){
//         console.log('Parent Render')
//         return(
//             <div>
//                 <h1>About Us Page</h1>
//                 <h2>This is about us page of our app</h2>
//                 <UserContext.Consumer>
//                     {({loggedUser})=>(
//                         <h1>{loggedUser}</h1>
//                     )}
//                 </UserContext.Consumer>
//                 <User />
//                 <UserClass />
//             </div>
//         )
//     }
// }

const About=()=>{
    return(
        <div className="flex items-center justify-center flex-col text-center">
            <button className=" bg-orange-500 rounded-lg text-white w-48 h-8 p-6 m-6 text-center font-medium flex items-center justify-center"><Link to='https://github.com/aniketdeshmukh548/namaste-react'>Show My Profile</Link></button>
            <img src="" alt="" />
            <div className=" ">
                <h1>About Us Page</h1>
                <h2>This is about us page of our app</h2>
            </div>
        </div>
    )
}

export default About;