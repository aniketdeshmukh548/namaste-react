import { CDN_URL } from "../utils/constants";

const ItemList=({list})=>{
    console.log(list)
    return(
        <div>
            {list.map((item)=>(
                <div key={item.card.info.id} className=" m-2 p-2 border-black border-b-2 text-left flex">
                    
                    <div className=" w-9/12">
                    <div className=" py-2">
                        <span>{item.card.info.name}</span>
                        <p className=" py-2">₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                    </div>
                    <p className=" text-xs">{item.card.info.description}</p>
                    </div>
                    <div className=" w-3/12 p-4">
                        <div className=" absolute">
                            <button className=" bg-white text-green-500 p-2 shadow-lg mx-12 rounded-lg">ADD+</button>
                        </div>
                    <img className=" w-full h-full" src={CDN_URL+item.card.info.imageId} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;