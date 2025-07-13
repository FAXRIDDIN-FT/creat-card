import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Recipe } from "../../types";

interface InitialState {
    value: Recipe[]
}

const initialState: InitialState = {
    value: []
}

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers:{
        toggleWishlistRecipe: (state, action: PayloadAction<Recipe>) => {
            const isExist = state.value.some((item) => item.id === action.payload.id)
            if (isExist) {
            }
            else{
                state.value.push(action.payload)
            }
        }
    }
})

export const {toggleWishlistRecipe} = recipeSlice.actions

export default recipeSlice.reducer  