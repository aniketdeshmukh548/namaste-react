import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [listofRes,setListofres]=useState([])
    const [filteredRes,setfilteredRes]=useState([]) //here we have made copy of listofRes
    const [searchText,setsearchText]=useState('')
    console.log('body render')
    useEffect(()=>{
      fetchData()
    },[])

    const fetchData =async ()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json= await data.json()
      console.log(json)
      //this is not the good way to write js code 
      //setListofres(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      //we have to write in optional chaining
      setListofres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) //added list of res to filteredres
    }
    //conditional rendering
    // if(listofRes.length===0){
    //   return <Shimmer />
    // }
    //used the ternary operator
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
                setListofres(filterList);
            }}>Top Rated Restaurants (4.0+)</button>
        </div>
        <div className="res-container">
          {
            filteredRes.map((e)=>(            //attached filteredRes to map items
              <RestaurantCard key={e.info.id} resData={e} />
            ))
          }
        </div>
        </div>
    )
}

export default Body;