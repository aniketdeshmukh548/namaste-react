import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import { CART_EMPTY } from "../utils/constants";


const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch()
    const removeHandler=(item)=>{
        dispatch(removeItem(item))
    }
    const clearHandle=()=>{
        dispatch(clearCart())
    }
    //console.log(cartItems)
    return(
        <div className=" text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold">Cart Items</h1>
            {cartItems.length===0 && (
                <div className=" text-center flex flex-col items-center">
                    <img className="  h-[25%] mx-[30%]" src={CART_EMPTY} alt="" />
                    <h1 className=" font-serif font-extrabold text-xl">Your cart is empty</h1>
                    <p>Click on below link to view more restaurants</p>
                    <a className=" text-blue-400" href='/'>Click here!!</a>
                </div>
            )}
            <button className="ml-2 bg-orange-500 text-white rounded-lg" onClick={clearHandle}>Clear Cart</button>
            <div className=" w-1/2 m-auto border border-solid border-l-gray-400 shadow-lg">
                <ItemList remove={removeHandler} list={cartItems} isCartpage={true}/>
            </div>
            <div className=" w-1/2 my-1 m-auto border border-solid border-l-gray-400 bg-orange-200 shadow-lg">
                <span>Checkout</span>
            </div>
        </div>
    )
}

export default Cart;