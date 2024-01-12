import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Body=()=>{
    const [searchText,setsearchText]=useState('')
    const OnlineStatus=useOnlineStatus();
    const listofRes=useRestaurantData();
    const setfilteredRes=useRestaurantData();
    const filteredRes=useRestaurantData();
    console.log(listofRes,filteredRes)
    console.log('body render')
    if(OnlineStatus===false){
      return(
      <h1>Looks you are offline. Please check your internet connection</h1>
      )
    }
    return listofRes.length===0 ? <Shimmer /> : (
        <div className="body">
        <div className="filter-container">
          <div className="search-res">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
              setsearchText(e.target.value);
            }}/>
            <button onClick={()=>{
                const filterRes = listofRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredRes(filterRes);
            }}>Serach</button>
          </div>
            <button className="filter-btn" onClick={()=>{
                const filterList = listofRes.filter((res) => res.info.avgRating > 4.0);
                setfilteredRes(filterList);
            }}>Top Rated Restaurants (4.0+)</button>
        </div>
        <div className="res-container">
          {
            filteredRes.map((e)=>(            
              <Link key={e.info.id} to={'/restaurants/'+e.info.id}><RestaurantCard  resData={e} /></Link>
            ))
          }
        </div>
        </div>
    )
}

export default Body;