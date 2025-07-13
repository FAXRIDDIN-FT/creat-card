import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ICard {
  id: string;
}

const initialState: { value: ICard[] } = {
  value: []
};

export const productSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    toggleWishlistProduct: (state, action: PayloadAction<ICard>) => {
      const isExist = state.value.some((item) => item.id === action.payload.id);
      if (isExist) {
        state.value = state.value.filter((item) => item.id !== action.payload.id);
      } else {
        state.value.push(action.payload);
      }
    }
  }
});

export const { toggleWishlistProduct } = productSlice.actions;
export default productSlice.reducer;
