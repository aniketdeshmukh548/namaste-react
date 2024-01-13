import { useEffect, useState } from "react"

const useRestaurantData=()=>{
    const [listofRes,setListofres]=useState([])
    const [filteredRes,setfilteredRes]=useState([]) 

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setListofres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[])
        setfilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[])
    }

    return{
        listofRes,
        setfilteredRes: setfilteredRes,
        filteredRes,
    }
}

export default useRestaurantData;