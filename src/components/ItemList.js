import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList=({list,remove,isCartpage})=>{
    const dispatch=useDispatch()
    const handleClick=(item)=>{
        dispatch(addItem((item)));
    }
    //console.log(remove)
    //console.log(list)
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
                        <div className=" absolute flex flex-col space-y-10">
                            <button className=" bg-black text-white shadow-lg font-extrabold text-2xl -mx-8 rounded-lg" onClick={()=>handleClick(item)}>+</button>
                            {isCartpage && <button className=" bg-black text-white font-extrabold text-2xl shadow-lg -mx-8 rounded-lg"  onClick={()=>{remove(item)}}>−</button>}
                        </div>
                    <img className=" w-full h-full" src={CDN_URL+item.card.info.imageId} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;