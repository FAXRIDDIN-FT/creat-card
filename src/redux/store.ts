import { configureStore } from "@reduxjs/toolkit";
import recipe from "./features/Recipes";
import product from "./features/Products";
import card from "./features/CardView";
export const store = configureStore({
  reducer: {
    recipe,
    product,
    card 
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;