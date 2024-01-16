import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        //user:userReducer =>if userslice is present.
    }
})

export default appStore;