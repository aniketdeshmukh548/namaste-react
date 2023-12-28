import React from "react";
import ReactDOM from 'react-dom/client';

//React Element
// const heading= (
//     <h1>Namaste react from react element</h1>
// );

//react composition or Component composition- here we combine 2 or more react components inside one another.

// const Title=()=>(
//     <h1>This is Namaste Title for Component composition!!</h1>
// )

// const HeadingComp=()=>(
//     <div id="container">
//         <Title />
//         <h3 className="heading">Namaste React from heading component w/o return keyword!!</h3>
//     </div>
// )

//normal variable injected into react element and it is injected in  react component.
const elem=1000; //noram varaible

const title=(        //react elemnet
    <h1>This is Namaste Title for Component composition!!
      {elem } 
    </h1> //noraml element injected inside react element
)

const HeadingComp=()=>(
    <div id="container">
        {title}
        <h3 className="heading">Namaste React from heading component w/o return keyword!!</h3>
    </div>  //react elemet injected inside react component
)
//React Functional component
// const HeadingComp=()=>{
//     return (
//         <h1 id="heading">Namaste from react component with return keyword!!</h1>
//     )
// }
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComp />)