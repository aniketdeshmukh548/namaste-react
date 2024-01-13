import {  useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName,setbtnName]=useState('Login');
    const OnlineStatus=useOnlineStatus();
    console.log('header render') //=>the Header component re-renders and the value of btnName changes as setbtnName is set to Logout
    return(
        <div className="flex justify-between bg-orange-400 shadow-lg m-2 rounded-3xl">
            <div className="logo-container">
                <a href="/"><img className="w-60 h-27 rounded-full overflow-hidden" src={LOGO_URL} alt="" /></a>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{OnlineStatus?'✅':'🔴'}</li>
                    <li className="px-4">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className="px-4">Cart🛒</li>
                    <button className="login" onClick={()=>{
                        (btnName==='Login') ? setbtnName("Logout") : setbtnName('Login') //toggle login to logout and vice-versa 
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;