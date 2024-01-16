import RestaurantCard, { RestaurantisOpen } from "./RestaurantCard";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";
import UserContext from "../utils/UserContext";

const Body=()=>{
    const [searchText,setsearchText]=useState('')
    const OnlineStatus=useOnlineStatus();
    const {listofRes,setfilteredRes,filteredRes}=useRestaurantData();
    const OpenRestaurant=RestaurantisOpen(RestaurantCard);
    const {setUserName,loggedUser}=useContext(UserContext);
    console.log(listofRes,filteredRes)
    console.log('body render')
    if(OnlineStatus===false){
      return(
      <h1>Looks you are offline. Please check your internet connection</h1>
      )
    }
    return listofRes.length===0 ? <Shimmer /> : (
        <div className="body">
        <div className="filter flex justify-center">
          <div className="p-4 m-8 ">
            <input type="text" placeholder="Search food and restaurants" className='border border-solid border-black w-96 rounded-lg' value={searchText} onChange={(e)=>{
              setsearchText(e.target.value);
            }}/>
            <button className="px-4 py-2 m-8 bg-gray-400 rounded-3xl font-semibold" onClick={()=>{
                const filterRes = listofRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredRes(filterRes);
            }}>Serach</button>
            <button className="px-4 py-2 m-8 bg-gray-400 rounded-3xl font-semibold" onClick={()=>{
                const filterList = listofRes.filter((res) => res.info.avgRating > 4.0);
                setfilteredRes(filterList);
            }}>Top Rated Restaurants (4.0+)</button>
            <label className="px-4 py-2 m-2 bg-gray-400 rounded-3xl font-semibold">UserName:</label>
            <input type="text" className='border border-solid border-black w-56cls rounded-lg'
            value={loggedUser} onChange={(e)=>{
              setUserName(e.target.value)
            }}/>
          </div>
           
        </div>
        <div className="flex flex-wrap px-32">
          {
            filteredRes.map((e)=>(            
              <Link key={e.info.id} to={'/restaurants/'+e.info.id}>
              {/* {HOC condition applied header} */}
              {e.info.id ? <OpenRestaurant resData={e}/> : <RestaurantCard  resData={e} />}
                </Link>
            ))
          }
        </div>
        </div>
    )
}

export default Body;