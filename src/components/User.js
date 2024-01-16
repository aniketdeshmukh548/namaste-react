import { useEffect, useState } from "react";
const User=()=>{
    // const [count]=useState(0)
    // const [count2]=useState(2)
    const [name,setName]=useState(null)
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async ()=>{
        const data=await fetch('https://api.github.com/users/rvdarak12');
        const json=await data.json();
        console.log(json)
        setName(json.data)
    }
    return(
        <div className="user-info">
            {/* <h2>Count:{count}</h2>
            <h2>Count2:{count2}</h2> */}
            <h2>Name:{name}</h2>
            <h3>Location:Pune</h3>
            <h3>Contact:7020196993</h3>
        </div>
    )
}

export default User;