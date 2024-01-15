import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { CDN_URL } from '../utils/constants';

const RestaurantMenu = () => {
    const {resId}= useParams();
    const resInfo=useRestaurantMenu(resId);
    const [showIndex,setshowIndex]=useState(null)
    console.log(resInfo)
    if(resInfo===null) return <Shimmer />
    const {name,cuisines,costForTwoMessage,areaName,}=resInfo?.cards[0]?.card?.card?.info
    const {message,icon}=resInfo?.cards[0]?.card?.card?.info.feeDetails
    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories)
  
  return (
      <div className='text-center'>
        <h2 className='font-extrabold my-6 text-2xl'>{name}</h2>
        <p className=' font-semibold text-xl'>{cuisines.join(',')}</p>
        <p className=' font-semibold text-xl'>{costForTwoMessage}</p>
        <p>{areaName}</p>
        <div className="flex justify-center">
    <img className='w-6 h-6 mx-1' src={CDN_URL + icon} alt="" />
    <p className='text-sm'>{message}</p>
</div>
      <div>
         {categories.map((category,index)=>(
          <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
          showItems={index===showIndex ? true : false}
          setshowIndex={()=>setshowIndex(index)} />
        )
        )}
       </div>
    </div>
  )
}

export default RestaurantMenu