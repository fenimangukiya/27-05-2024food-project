import { createSlice} from "@reduxjs/toolkit"

const CartSliceUi = createSlice({
    name: 'cart',
    initialState: {cartVisible : false},
    reducers:{
        toggle(state){
            state.cartVisible = !state.cartVisible
        console.log(state.cartVisible);
        }
    }
})

export const cartUiAction = CartSliceUi.actions
export default CartSliceUi