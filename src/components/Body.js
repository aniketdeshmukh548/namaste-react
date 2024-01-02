import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/data";

const Body=()=>{
    const [listofRes,setListofres]=useState(resList)
    return(
        <div className="body">
        <div className="filter-container">
            <button className="filter-btn" onClick={()=>{
                const filterList = listofRes.filter((res) => res.info.avgRating > 4.0);
                setListofres(filterList);
            }}>Top Rated Restaurants (4.0+)</button>
        </div>
        <div className="res-container">
          {
            listofRes.map((e)=>(
              <RestaurantCard key={e.info.id} resData={e} />
            ))
          }
        </div>
        </div>
    )
}

export default Body;