import { createSlice } from '@reduxjs/toolkit'
import { WishlistItem } from '../../types'

const initialState: { items: WishlistItem[] } = {
  items: JSON.parse(localStorage.getItem('wishlist') || '[]'),
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id && item.type === action.payload.type)
      if (!exists) {
        state.items.push(action.payload)
        localStorage.setItem('wishlist', JSON.stringify(state.items))
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(
        item => !(item.id === action.payload.id && item.type === action.payload.type)
      )
      localStorage.setItem('wishlist', JSON.stringify(state.items))
    },
    clearWishlist: (state) => {
      state.items = []
      localStorage.removeItem('wishlist')
    }
  }
})

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
