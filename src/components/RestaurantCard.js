import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,sla}=resData?.info
    return(
            <div className="m-4 p-4 w-[260px] h-[520] bg-gray-200 hover:bg-gray-[250] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-100 ease-in-out">
                <img className=' rounded-sm' src={CDN_URL+resData.info.cloudinaryImageId} alt="card-img" />
                <h3 className="font-extrabold py-4 text-lg">{name}</h3>
                <h4 className="text-sm mb-2 overflow-ellipsis overflow-hidden">{cuisines.join(',')}</h4>
                <h4 className="text-sm mb-2">{avgRating} Stars</h4>
                <h4 className="text-sm mb-2">{costForTwo}</h4>
                <h4 className="text-sm mb-2">{sla.slaString}</h4>
            </div>
    )
}

export default RestaurantCard;