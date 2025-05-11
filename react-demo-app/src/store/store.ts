import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import shippingReducer from "./features/shippingSlice";

/**
 * Central Redux store configuration.
 * Combines reducers for cart and shipping state.
 */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shipping: shippingReducer,
  },
});

// Root state type inferred from store
export type RootState = ReturnType<typeof store.getState>;

// App dispatch type for typed useDispatch hooks
export type AppDispatch = typeof store.dispatch;
