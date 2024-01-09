import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
    const[resInfo,setresInfo]=useState(null)
    const {resId}= useParams();
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const data=await fetch(MENU_API + resId);
        const json=await data.json();
        console.log(json)
        setresInfo(json.data)
    };

    if(resInfo===null) return <Shimmer />
      
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info
    const { itemCards: itemCards1,title:title1} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const { itemCards: itemCards2,title:title2} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards1)
  return (
    <div className='res-menu'>
        <h2>{name}</h2>
        <p>{cuisines.join(',')}</p>
        <p>{costForTwoMessage}</p>
        <h2>Menu</h2>
        <h2>{title1 && itemCards1 ? title1 + '(' + itemCards1.length + ')' : 'N/A'}</h2> 
        {/* made change according to gpt pls verify */}
        <div className='res-items'>
        <ul>
          {/* made change according to gpt pls verify */}
            {itemCards1 && itemCards1.map((item)=>(
              <li key={item.card.info.id}>{item.card.info.name}-{'Rs.'}{item.card.info.price/100}</li>
            ))}
        </ul>
        </div>
          <h2>{title2 && itemCards1 ? title2 + '(' + itemCards2.length + ')' : 'N/A'}</h2>
          <ul>
            {itemCards2 && itemCards2.map((item)=>(
              <li key={item.card.info.id}>{item.card.info.name}-{'Rs.'}{item.card.info.defaultPrice/100||item.card.info.price/100}</li>
            ))}
          </ul>
    </div>
  )
}

export default RestaurantMenu