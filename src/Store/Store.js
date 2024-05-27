import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Slice/CartSlice";
import CartSliceUi from "./Slice/CartSliceUi";

const store = configureStore({
    reducer:{
        cart:cardSlice.reducer,
        cartUi:CartSliceUi.reducer
    }
})

export default store
