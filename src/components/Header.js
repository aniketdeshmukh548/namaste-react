import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
   // let btnName="Login"; //local variable
    const [btnName,setbtnName]=useState('Login');
    console.log('header render') //=>the Header component re-renders and the value of btnName changes as setbtnName is set to Logout
    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo-img" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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