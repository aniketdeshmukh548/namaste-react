import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    const [listofRes,setListofres]=useState([])
    const [filteredRes,setfilteredRes]=useState([]) 
    const [searchText,setsearchText]=useState('')
    console.log('body render')
    useEffect(()=>{
      fetchData()
    },[])

    const fetchData =async ()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json= await data.json()
      console.log(json)
      setListofres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) //added list of res to filteredres
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
                //setfilteredRes ? setfilteredRes(filterRes) : setfilteredRes
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