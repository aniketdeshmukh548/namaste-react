import {  useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName,setbtnName]=useState('Login');
    const OnlineStatus=useOnlineStatus();
    // useEffect(()=>{
    //     console.log("renders every time when component renders as no dependency array")
    // })
    // useEffect(()=>{
    //     console.log('renders only first time/initial when component renders as it has empty dependency array')
    // },[])
    // useEffect(()=>{
    //     console.log('renders everytime when the btnName updates/changes as it is added to dependency array')
    // },[btnName])
    console.log('header render') //=>the Header component re-renders and the value of btnName changes as setbtnName is set to Logout
    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo-img" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{OnlineStatus?'✅':'🔴'}</li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        (btnName==='Login') ? setbtnName("Logout") : setbtnName('Login') //toggle login to logout and vice-versa 
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;