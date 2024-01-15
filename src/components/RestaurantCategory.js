import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setshowIndex})=>{
    const handleClick=()=>{
        setshowIndex()
    }
    return(
        <div>
            <div className="w-1/2 m-auto my-4  border-gray-400 border-b-2 bg-slate-200 shadow-lg p-4 cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between">
                <span className=" font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span className="">🔽</span>
                </div>
                {showItems && <ItemList list={data.itemCards}/>}
            </div>
            
        </div>
    )
}

export default RestaurantCategory;