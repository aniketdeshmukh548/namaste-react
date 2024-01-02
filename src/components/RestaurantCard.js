import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    return(
            <div className="res-card">
                <img className="res-img" src={CDN_URL+resData.info.cloudinaryImageId} alt="card-img" />
                <h3>{resData.info.name}</h3>
                <h4>{resData.info.cuisines.join(',')}</h4>
                <h4>{resData.info.avgRating}Stars</h4>
                <h4>{resData.info.costForTwo}</h4>
                <h4>{resData.info.sla.slaString}</h4>
            </div>
    )
}

export default RestaurantCard;