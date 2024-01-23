// import React from "react";
// class UserClass extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             userInfo:{
//                 name:'DUMMY',
//                 location:'Remote',
//             }
//         }
//         console.log('Child Constructor')
//     }
//     async componentDidMount(){
//         const data=await fetch("https://api.github.com/users/aniketdeshmukh548");
//         const json=await data.json();
//         console.log(json)
//         this.setState({
//             userInfo:json
//         })
//         console.log('componentDidMount')
//     }
//     componentDidUpdate(){
//         console.log('componentDidUpdate')
//     }
//     componentWillUnmount(){
//         console.log('componentWillUnmount')
//     }
//     render(){
//         console.log('Child Render')
//         const {name,location,avatar_url}=this.state.userInfo;
//        // const {count}=this.state;
//         return(
//             <div className="user-info">
//                 {/* <button onClick={()=>{
//                     //this.state.count=this.state.count+1; //THIS WILL NEVER WORK NEVER DIRECTLY UPDATE THE STATE 
//                     this.setState({
//                         count:this.state.count +1
//                     })
//                 }}>Increase Count by 1</button>
//                 <h2>Count={count}</h2> */}
//             <img src={avatar_url} alt="img_profile" />
//             <h2>Name:{name}</h2>
//             <h3>Location:{location}</h3>
//             <h3>Contact:7020196993</h3>
//         </div>
//         )
//     }
// }

// export default UserClass;