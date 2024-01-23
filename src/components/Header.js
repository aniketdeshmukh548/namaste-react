import {  useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btnName,setbtnName]=useState('Login');
    const OnlineStatus=useOnlineStatus();
    const {loggedUser}=useContext(UserContext)
    //console.log('header render') //=>the Header component re-renders and the value of btnName changes as setbtnName is set to Logout
    const cartItems=useSelector((store)=>store.cart.items);
    //console.log(cartItems)
    return(
        <div className="flex justify-between bg-orange-400 shadow-lg m-2 rounded-3xl">
            <div className="logo-container">
                <Link to='/'><img className="w-60 h-27 rounded-full overflow-hidden" src={LOGO_URL} alt="" /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4  text-white">Online Status:{OnlineStatus?'✅':'🔴'}</li>
                    <li className="px-4 hover:bg-gray-300 rounded-lg text-white">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="px-4 hover:bg-gray-300 rounded-lg text-white">
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className="px-4 hover:bg-gray-300 rounded-lg text-white">
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className="px-4 hover:bg-gray-300 rounded-lg text-white">
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className="px-4 hover:bg-gray-300 rounded-lg text-white">
                        <Link to='/cart'>Cart🛒-({cartItems.length})</Link>
                    </li>
                    <button className="login font-extrabold " onClick={()=>{
                        (btnName==='Login') ? setbtnName("Logout") : setbtnName('Login') //toggle login to logout and vice-versa 
                    }}>
                        <Link to='/login'>{btnName}</Link>
                    </button>
                    <li className=" px-4">
                        <h2 className=" font-bold">{loggedUser}</h2>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;