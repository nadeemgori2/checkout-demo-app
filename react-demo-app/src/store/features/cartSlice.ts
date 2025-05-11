/**
 * cartSlice.ts
 * Redux slice for managing cart totals and discount logic.
 */

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Define shape of cart state
interface CartState {
  cartTotal: number;
  discount: number;
}

// Initial state values
const initialState: CartState = {
  cartTotal: 0,
  discount: 0,
};

// Slice definition
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Sets the cart total (usually after applying coupon or shipping fees)
     */
    setItems(state, action: PayloadAction<number>) {
      state.cartTotal = action.payload;
    },

    /**
     * Applies a discount from a valid coupon
     */
    applyCoupon(
      state,
      action: PayloadAction<{ code: string; discount: number }>
    ) {
      state.discount = action.payload.discount;
    },

    /**
     * Resets discount when coupon is removed
     */
    removeCoupon(state) {
      state.discount = 0;
    },
  },
});

// Export actions and reducer
export const { setItems, applyCoupon, removeCoupon } = cartSlice.actions;
export default cartSlice.reducer;
