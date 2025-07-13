import { Praduct } from "../../types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    value: Praduct[]
}

const initialState: InitialState = {
    value: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        toggleWishlistProduct: (state, action: PayloadAction<Praduct>) => {
            const isExist = state.value.some((item) => item.id === action.payload.id)
            if (isExist) {
                
            }
            else{
                state.value.push(action.payload)
            }
        }
    }
})

export const {toggleWishlistProduct} = productSlice.actions

export default productSlice.reducer